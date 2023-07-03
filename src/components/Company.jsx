/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { selectProduct } from '@/store/product/productSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function Company() {
  const dispatch = useDispatch();
  const product = useSelector(selectProduct);

  const { company } = product;
  const { address } = company;
  return (
    <section className="m-2 border-2 p-2 ">
      <div>
        <img className="h-8" src={company.logo} alt={company.name} />
        <iframe
          src={`https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2522.7758294788323!2d${address.longitude}!3d${address.latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNTDCsDQ2JzQ3LjAiTiA2wrAwNicwMS4zIkU!5e0!3m2!1sen!2sin!4v1688380884336!5m2!1sen!2sin`}
          className='w-full'
          height='300'
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div></div>
    </section>
  );
}
