import express from 'express';
import bp from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';

const router = express.Router();
const app = express();
const { urlencoded, json } = bp;

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(morgan('dev'));

// router
router.get('/me', (req, res) => {
  res.send({ ok: true });
});
// register
app.use('/api', router);
/////////////////////////

// custom middleware for app.get("./data") routes
const log = (req, res, next) => {
  console.log('logging');

  // passing data
  req.mydata = 'hello';
  next();
};

// custom middleware for all routes
app.use(log);

/////////////////
// get
app.get('/data', log, (req, res) => {
  //   res.send({ data: [1, 2, 3] });
  res.send({ data: req.mydata });
  //   res.send('ok');
});

// post
app.post('/data', (req, res) => {
  console.log(req.body);
  res.send({ ok: true });
});

app.listen(3000, () => {
  console.log('server is on 3000');
});
