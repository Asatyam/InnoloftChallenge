import React, { Suspense, useEffect, useState } from 'react';
import {
  productSlice,
  selectProduct,
  fetchProduct,
} from '@/store/product/productSlice';
import { useDispatch, useSelector } from 'react-redux';
import AtomicSpinner from 'atomic-spinner';
import Nav from '@/components/Nav';
import axios from 'axios';
import TinyEditor from '@/components/TinyEditor';


export default function ProductEdit({config, trlOptions}) {

  const product = useSelector(selectProduct);
  const dispatch = useDispatch();

  const status = useSelector((state) => state.product.status);
  const error = useSelector((state) => state.product.error);

  const [description, setDescription] = useState('');
  const [categories, setCategories] = useState([]);
  const [models, setModels] = useState([]);
  const [trl ,setTrl] = useState('');

  console.log(product,status )

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProduct());
    }
  }, [status, dispatch]);

  useEffect(()=>{
    if (status === 'succeeded'){
      setCategories(product.categories);
      setDescription(product.description);
      setModels(product.businessModels);
      setTrl(product.trl);
    }
  },[status, product]);
  
  if (status !== 'succeeded') {
    return (
      <>
      <Nav config={config}/>
      <div className=' flex justify-center items-center'>
        <AtomicSpinner />
      </div>
      </>
    );
  }
  
  return (
    <main>
      <Nav config={config}/>
      <main className='py-4'>
        <h1 className='font-bold text-lg'>Edit Product Details</h1>
        <form className='p-3 flex flex-col' onSubmit={e=>e.preventDefault()}>
            <div className='p-2 border-2 m-2 '>
                <label htmlFor='description' className='font-bold p-2 m-2 my-4'>Description</label>
                <TinyEditor id='description'/>
            </div>
          <div className='p-2 border-2 m-2 '>
            <label className='font-semibold' htmlFor='categories'>Categories</label>
            {categories.map((category)=>{
              return(
                <div key={category.id}>
                <p>{category.name}</p>
                </div>
              )
            })}
          </div>
          <div  className='p-2 border-2 m-2 '>
            <label className='font-semibold' htmlFor='models'>Business Models</label>
            {models.map((model)=>{
              return(
                <div key={model.id}>
                <p>{model.name}</p>
                </div>
              )
            })}
          </div>
          <div  className='p-2 border-2  m-2 flex flex-col gap-4 ' >
             <label className='font-semibold ' htmlFor='trl'>TRL</label>
             <select name='trl' id='trl' className=' bg-slate-200 outline-none rounded'>
              <option value = '' disabled>Select a TRL</option>
              {trlOptions.map(trl=>(<option key={trl.id}>{trl.name}</option>))}
              </select>
          </div>
            <button type='submit' className='p-1 px-2 text-lg font-semibold hover:bg-indigo-900 transition  text-center border-2 border-cyan-300 bg-indigo-500 text-white mx-auto '>Submit</button>
        </form>
        </main>
    </main>
  );
}

export const getStaticProps = async () => {
  const res = await axios.get(
    `https://api-test.innoloft.com/configuration/${process.env.APP_ID || 1}`
  );
  const res2 = await axios.get(
    `https://api-test.innoloft.com/trl`
  );
  const config = res.data;
  const trlOptions = res2.data

  return {
    props: { config, trlOptions },
  };
};