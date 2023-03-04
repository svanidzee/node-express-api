import express from 'express';
import bp from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';
import ItemRouter from './resources/item/item.router.js';

const app = express();
const { urlencoded, json } = bp;

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use('/api/item', ItemRouter);
app.listen(3000, () => {
  console.log('server is on 3000');
});
