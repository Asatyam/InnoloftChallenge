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
    <div>
      <Nav config = {config}/>
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await axios.get(`https://api-test.innoloft.com/configuration/${process.env.APP_ID || 1}`);
  const config = res.data;

  return {
    props: { config },
  };
};
