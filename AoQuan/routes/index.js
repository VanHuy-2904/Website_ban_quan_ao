const userRouter = require('./user');
const productRouter = require('./product')
const cartRouter = require('./cart')
function route (app) {
    app.use('/api/user', userRouter);
    app.use('/api/product', productRouter);
    app.use('/api/cart', cartRouter);
    app.get('/', (req, res) => {
        res.send('Hello World1!')
      })
      
}

module.exports = route;