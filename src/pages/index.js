import Image from 'next/image';
import { Inter } from 'next/font/google';
import { useEffect } from 'react';
import axios from 'axios';
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  useEffect(() => {
    // const configuration =
    axios
      .get('/api/configs')
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log('Error in axios');
        console.log(err);
      });
  });
  return <div>Hello</div>;
}
