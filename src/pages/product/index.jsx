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
import Description from '@/components/Description';
import Details from '@/components/Details';
import Video from '@/components/Video';
import User from '@/components/User';
import Company from '@/components/Company';

export default function ProductView({config}) {
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
    <main className='m-2 py-4 grid lg:grid-cols-[1fr_max-content] lg:gap-4'>
        <div className=''>
          <Description/>
          <Details/>
          <Video/>
        </div>
        <div className=''>
        { config.hasUserSection &&   <User/>}
      </div>
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