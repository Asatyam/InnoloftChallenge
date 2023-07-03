// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from 'axios';
export default async function handler(req, res) {
  console.log(req.method);
  if (req.method == 'GET') {
    const response = await axios.get(
      'https://api-test.innoloft.com/product/6781'
    );
    const result = await response.data;
    return res.send({ result });
  } else if (req.method === 'PUT') {
    const response = await axios.put(
      'https://api-test.innoloft.com/product/6781',req.body
    );
    console.log('requested');
    console.log(response.data);
    return res.status(200).send(response.data);
  }
}
