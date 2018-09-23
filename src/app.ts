import * as express from "express";
import * as bodyParse from "body-parser";
import * as mongoose from 'mongoose';
import ExchangeRouter from './routers/exchangeRouter'

const app = express();

// set up mongoose
const URI: string = "mongodb://127.0.0.1:27017/eldolar";
 mongoose.connect(process.env.MONGODB_URI || URI, (err: any) => {
  if (err) {
    console.log(err.message)
  } else {
    console.log("Successfully Connected")
  }
})

 // config
app.use(bodyParse.json());
app.set("port", 3000);

// routers
app.use('/api/v1/exchanges', ExchangeRouter)

// start
app.listen(app.get("port"), () => {
  console.log("App is running on localhost:%d", app.get("port"));
})