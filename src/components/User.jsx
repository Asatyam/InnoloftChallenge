/* eslint-disable @next/next/no-img-element */
import React from "react";
import {selectProduct} from '@/store/product/productSlice';
import { useDispatch, useSelector } from 'react-redux';
import Company from "./Company";



export default function User(){

    const dispatch = useDispatch();
    const product = useSelector(selectProduct);

    const {user} = product;
    return(
       <section className="m-2 border-2 p-2 flex flex-col md:flex">
            <div>
                <div className="flex gap-4  items-center">
                    <img className="h-12 w-12 rounded-full" src={user.profilePicture} alt='user-profle' / >
                    <div>
                        <p className="font-bold text-lg">{user.firstName + ' ' + user.lastName}</p>
                        <p className="text-sm ">{user.position}</p>
                        <p className="font-semibold">Contact: <span className="font-normal"> {user.email} </span></p>
                    </div>
                </div>
            </div>
            <div>
                <Company/>
            </div>
       </section>
    )
}