/* eslint-disable @next/next/no-img-element */
import React, { Suspense, useEffect, useState } from 'react';
import {
  productSlice,
  selectProduct,
  fetchProduct,
  updateProduct
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
  const [trl ,setTrl] = useState({});

  const [category, setCategory] = useState('');
  const [model, setModel] = useState('');

  const[ isDone, setIsDone] = useState(false);

  const [id, setId] = useState(3);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProduct());
    }
  }, [status, dispatch]);

  useEffect(()=>{
    if (status === 'succeeded' && !isDone ){
      setCategories(product.categories);
      setDescription(product.description);
      setModels(product.businessModels);
      setTrl(product.trl);

      setIsDone(true);
    }
  },[status, product,isDone]);
  
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

  const handleReset = (e)=>{

    setCategories(product.categories);
    setDescription(product.description);
    setModels(product.businessModels);
    setTrl(product.trl);
  }

  const deleteModel = (e)=>{
      const mId = Number(e.target.id);
   const modified =  models.filter(model=>model.id !== mId);
    setModels(modified);

  }
  const deleteCategory = (e)=>{
    const cId = Number(e.target.id);
   const modified =  categories.filter(category=>category.id !== cId);
    setCategories(modified);
  }
  const handleTrl = (e)=>{
    const index = e.target.selectedIndex;
    const el = e.target.childNodes[index];
    const option = el.getAttribute('id');
    setTrl({
      id:option,
      name:e.target.value
    });
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    const formData = {
      ...product,
      categories,
      businessModels: models,
      trl,
      description,
    }
    axios.put('/api/product',formData)
    .then(console.log)
    .catch(console.log);

    dispatch(updateProduct(formData));
  }
  
  return (
    <main>
      <Nav config={config}/>
      <main className='py-4'>
        <h1 className='font-bold text-lg'>Edit Product Details</h1>
        <form  className='p-3 flex flex-col' onSubmit={handleSubmit}>
            <div className='p-2 border-2 m-2 '>
                <label htmlFor='description' className='font-bold p-2 m-2 my-4'>Description</label>
                <TinyEditor id='description' description = {description} setDescription = {setDescription}/>
            </div>
          <div className='p-2 border-2 m-2 '>
            <label className='font-semibold' htmlFor='categories'>Categories</label>
            {categories.map((category)=>{
              return(
                <div key={category.id} className='flex '>
                <p className='bg-cyan-600 text-sm p-1 text-white rounded-lg  m-2 w-fit'>{category.name}  </p>
                <button onClick={deleteCategory}  className=' w-6 h-6 m-2 '><img className='h-full' id={category.id}  src='/delete.png' alt='delete icon '/></button>
                </div>
              )
            })}
            <input placeholder='Add more categories' className=' bg-cyan-900 border-cyan-400 border-2 px-2 p-1 m-2 rounded text-white outline-none'  value={category} onChange={e=>setCategory(e.target.value)}/>
            <button className=' px-2 text-lg font-semibold hover:bg-indigo-900 transition  text-center border-2 border-cyan-300 bg-indigo-500 text-white mx-auto' onClick={(e)=>{setCategories(c=>[...categories,{id,name:category} ]); setId(id+1);setCategory('')}}> Add</button>
          </div>
          <div  className='p-2 border-2 m-2 '>
            <label className='font-semibold' htmlFor='models'>Business Models</label>
            {models.map((model)=>{
              return(
                <div key={model.id} className='flex'>
                <p className='bg-cyan-600 text-sm p-1 text-white rounded-lg  m-2 w-fit'>{model.name}</p>
                <button className=' w-6 h-6 m-2 ' onClick={deleteModel} ><img className='h-full' id={model.id} src='/delete.png' alt='delete icon '/></button>
                </div>
              )
            })}
            <input placeholder='Add More Models' className=' bg-cyan-900 border-cyan-400 border-2 px-2 p-1 m-2 rounded text-white outline-none' value={model} onChange={e=>setModel(e.target.value)}/>
            <button className=' px-2 text-lg font-semibold hover:bg-indigo-900 transition  text-center border-2 border-cyan-300 bg-indigo-500 text-white mx-auto' onClick={(e)=>{setModels(m=>[ ...models,{id,name:model}]); setId(id+1);setModel('')}}> Add</button>
          </div>
          <div  className='p-2 border-2  m-2 flex flex-col gap-4 ' >
             <label className='font-semibold ' htmlFor='trl'>TRL</label>
             <select name='trl' id='trl' className=' bg-cyan-600 text-white p-1 outline-none rounded' value={trl.name} onChange={handleTrl} >
              <option value = '' disabled>Select a TRL</option>
              {trlOptions.map(trl=>(<option key={trl.id} id={trl.id}>{trl.name}</option>))}
              </select>
          </div>

              <div className='flex justify-evenly '>
                <button  type='submit' className='p-1 px-2 text-lg font-semibold hover:bg-indigo-900 transition  text-center border-2 border-cyan-300 bg-indigo-500 text-white  '>Submit</button>
                <button onClick={handleReset} className='p-1 px-2 text-lg font-semibold hover:bg-indigo-900 transition  text-center border-2 border-cyan-300 bg-indigo-500 text-white  '>Reset</button>
              </div>
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