/* eslint-disable @next/next/no-img-element */
import React from "react";
import {
  productSlice,
  selectProduct,
  fetchProduct,
} from '@/store/product/productSlice';
import { useDispatch, useSelector } from 'react-redux';



export default function Description(){

    const dispatch = useDispatch();
    const product = useSelector(selectProduct);


    return(
       <section className="m-1 gap-4 border-4 p-2 grid md:grid-cols-2  lg:mx-20">
        <div className="border-2 h-72 md:h-full">
            <img src={product.picture}
             alt="Product-image"
             className="h-full w-full object-contain"
            />
        </div>
        <div className="p-2 border-2 border-indigo-400">
            <div className="flex items-center justify-between ">
                <h1 className="font-bold text-2xl my-2">{product.name}</h1>
                <p className="text-xs">Type: <span className="bg-slate-200 p-1 rounded-lg  mr-2">{product.type.name}</span></p>
            </div>
            <article dangerouslySetInnerHTML={{__html:product.description}}></article>
        </div>
       </section>
    )
}