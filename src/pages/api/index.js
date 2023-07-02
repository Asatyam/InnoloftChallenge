// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from 'axios';
export default async function handler(req, res) {
  
  const response = await axios.get('https://api-test.innoloft.com/')
  const result = await response.data;
  return res.send({result});

}
