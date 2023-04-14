import express from 'express';
import router from './router';

const app = express();

app.get('/', (req, res) => {
    console.log('Hello, world!');
    res.status(200).json({ message: 'Hello, world!!!!' });
});

app.use('/api', router);

export default app;