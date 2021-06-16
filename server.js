import express from 'express';
import auth from './src/routes/auth.js';
import product from './src/routes/product.js';
import user from './src/routes/user.js';

const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use('/auth', auth);
app.use('/product', product);
app.use('/user', user);

export default app;