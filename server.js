import express from 'express';
import auth from './src/routes/auth.js';
import product from './src/routes/product.js';
import user from './src/routes/user.js';
import client from './src/routes/client.js';

const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use('/health', (req, res) => {
    res.status(200).json({message: 'service working'})
})

app.use('/auth', auth);
app.use('/product', product);
app.use('/user', user);
app.use('/client', client);

export default app;