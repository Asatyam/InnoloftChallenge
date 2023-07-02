import React, { useEffect } from "react";
import { productSlice,selectProduct,fetchProduct  } from "@/store/product/productSlice";
import { useDispatch, useSelector } from "react-redux";

export default function ProductView(){

    const dispatch = useDispatch();
    const product = useSelector(selectProduct);

    const status = useSelector(state=>state.product.status);
    const error = useSelector(state=>state.product.error);

    useEffect(()=>{
        if (status === 'idle'){
            dispatch(fetchProduct());
        }
    },[status, dispatch])
    return(
        <div>
            {product.status}
            hello
        </div>
    )
}