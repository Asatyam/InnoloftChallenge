import React from 'react';
import {
  productSlice,
  selectProduct,
  fetchProduct,
} from '@/store/product/productSlice';
import { useDispatch, useSelector } from 'react-redux';

const formatVideoLink = (url)=>{

    const split = url.split('/');
    console.log(split);
    const last = split[3].split('?');
    last[0] = 'embed';
    const temp = last[1].slice(2);

    const formattedLast = last[0]+'/' + temp;
    split[3] = formattedLast;
    console.log(split.join('/'));
    return split.join('/');



}
export default function Video() {
  const dispatch = useDispatch();
  const product = useSelector(selectProduct);

  return (
    <section className='p-4 m-2 border-2 '>
     <p className='font-bold text-center text-lg my-2 '>Video</p>
      <div className="p-2 relative pb-[56.25%] h-0 max-h-96">
       <iframe
       allowFullScreen
       className='absolute top-0 left-0 w-full h-full'
      src={formatVideoLink(product.video)}>
      </iframe>
      </div>
    </section>
  );
}
