import axios from 'axios';

export default async function handler(req, res) {
  const response = await axios.get(
    `https://api-test.innoloft.com/trl`
  );
  const result = await response.data;
  return res.send({ result });
}
