import React, { Suspense, useEffect } from 'react';
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


export default function ProductEdit({config}) {
  const dispatch = useDispatch();
  const product = useSelector(selectProduct);

  const status = useSelector((state) => state.product.status);
  const error = useSelector((state) => state.product.error);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProduct());
    }
  }, [status, dispatch]);

  
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
        <form className='p-3 border-2' onSubmit={e=>e.preventDefault()}>
            <div>
                <label htmlFor='description' className='font-bold p-2 m-2'>Description</label>
                <TinyEditor/>
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
  const config = res.data;

  return {
    props: { config },
  };
};