import express from 'express';
import bp from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';

const app = express();
const { urlencoded, json } = bp;

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send({ messega: 'hello' });
  //   res.send('ok');
});

app.post('/', (req, res) => {
  console.log(req.body);
  res.send({ message: 'ok' });
});

app.listen(3000, () => {
  console.log('server is on 3000');
});
