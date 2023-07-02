/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import Link from "next/link";


export default function Nav({config}){


    return(
        <nav className="p-4 flex gap-3 items-center justify-between bg-violet-400 md:px-8 lg:px-16"> 
            <section>
                <img className = "text-white h-10 w-24 md:w-40"src = {config.logo} alt="logo"/>
            </section>
            <nav className="flex gap-2 text-sm font-semibold md:text-lg md:gap-4">
                <button className="hover:underline">
                    <Link href='/'>Home</Link>
                </button>
                <button className="hover:underline">
                    <Link href='/product'>Product</Link>
                </button>
                <button className="hover:underline">
                    <Link href='/product/edit'>Edit Product</Link>
                </button>

            </nav>
        </nav>
    )

}

