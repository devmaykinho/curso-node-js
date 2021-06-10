import express from 'express';
import auth from './src/routes/auth.js';
import product from './src/routes/product.js';

const app = express();

app.use(express.urlencoded({extended:true}));

app.use('/auth', auth);
app.use('/product', product);

export default app;