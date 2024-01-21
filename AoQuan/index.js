const express = require('express')
const morgan = require('morgan');
const route = require('./routes/index')
const app = express()
const bodyParser = require('body-parser');
app.use(bodyParser.json({limit: '10mb'}));
app.use(bodyParser.urlencoded({ extended: true }));
const cors = require('cors');
const port = 3000
const db = require('./config/db/index')
const corsOptions = {
  origin: 'http://localhost:3001',  // Thay đổi thành domain của trang web của bạn
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));



app.use(cors());



app.use(morgan('combined'));
db.connect();
route(app);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})