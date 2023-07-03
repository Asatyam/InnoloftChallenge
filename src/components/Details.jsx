import React from "react";
import {
  productSlice,
  selectProduct,
  fetchProduct,
} from '@/store/product/productSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function Details(){
    const dispatch = useDispatch();
    const product = useSelector(selectProduct);

    return(
        <section className="m-2 text-sm p-4 gap-2 border-black border-2 grid md:grid-cols-2 md:place-content-center px-8  ">
        
            <div className="w-fit ">
            Technology
            <div className="my-2">
            {product.categories.map((category)=><span key={category.id} className="bg-emerald-100 p-1 rounded-lg  m-2">{category.name}</span>)}
            </div>
            </div>
            <div className="w-fit ">
                Bussiness Models
            <div className="my-2">{product.businessModels.map((model)=><span key={model.id} className="bg-emerald-100 p-1 rounded-lg  m-2">{model.name}</span>)}</div>
             </div>
            <div className="w-fit ">
                Investment Effort <p className=" m-2 bg-emerald-100 p-1 w-fit rounded-lg ">{product.investmentEffort}</p>

            </div>
            <div className="w-fit">
                TRL <p className="m-2 bg-emerald-100 p-1 rounded-lg ">{product.trl.name}</p>
            </div>
        </section>
    )
}