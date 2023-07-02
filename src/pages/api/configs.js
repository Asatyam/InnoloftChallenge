import axios from 'axios';
import { config } from 'dotenv';
config();
export default async function handler(req, res) {


    const response = await axios.get(
      `https://api-test.innoloft.com/configuration/${process.env.APP_ID}`
    );
    const result = await response.data;
    return res.send({ result });
}
