import Image from 'next/image';
import { Inter } from 'next/font/google';
import { useEffect, useRef } from 'react';
import axios from 'axios';
const inter = Inter({ subsets: ['latin'] });
import { config } from 'dotenv';
import Nav from '@/components/Nav';
config();

export default function Home({ config }) {
  return (
    <main>
      <Nav config={config} />
      <h1 className='font-bold text-4xl p-4 text-center'>This is a website made for the Innoloft frontend challenge</h1>
      <article className='p-2 m-8 border-2' >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam inventore a hic accusamus aliquam nulla labore nisi est, provident alias ullam delectus molestias rem dignissimos tempore, debitis corrupti! Soluta, reprehenderit?
       <br/> 
       Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, doloribus qui corporis iure suscipit quasi sapiente accusantium labore repudiandae earum ea impedit voluptatum necessitatibus iusto ad, reiciendis dolores debitis praesentium.
      </article>
      <article className='p-2 m-8 border-2' >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam inventore a hic accusamus aliquam nulla labore nisi est, provident alias ullam delectus molestias rem dignissimos tempore, debitis corrupti! Soluta, reprehenderit?
       <br/> 
       Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, doloribus qui corporis iure suscipit quasi sapiente accusantium labore repudiandae earum ea impedit voluptatum necessitatibus iusto ad, reiciendis dolores debitis praesentium.
      </article>
      <article className='p-2 m-8 border-2' >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam inventore a hic accusamus aliquam nulla labore nisi est, provident alias ullam delectus molestias rem dignissimos tempore, debitis corrupti! Soluta, reprehenderit?
       <br/> 
       Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, doloribus qui corporis iure suscipit quasi sapiente accusantium labore repudiandae earum ea impedit voluptatum necessitatibus iusto ad, reiciendis dolores debitis praesentium.
      </article>
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
