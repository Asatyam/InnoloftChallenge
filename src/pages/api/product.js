// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from 'axios';
export default async function handler(req, res) {
  if (req.METHOD == 'GET') {
    const response = await axios.get(
      'https://api-test.innoloft.com/product/6781'
    );
    const result = await response.data;
    return res.send({ result });
  } else if (req.METHOD === 'PUT') {
    const response = await axios.put(
      'https://api-test.innoloft.com/product/6781'
    );
    return res.status(200).send({ response });
  }
}
