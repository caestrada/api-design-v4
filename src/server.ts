import express from 'express';
import router from './router';
import morgan from 'morgan';
import cors from 'cors';
import { protect } from './modules/auth';

const app = express();

// Middlewares
app.use(cors()); // Allows cross-origin requests.
app.use(morgan('dev'));
app.use(express.json()); // For parsing application/json. Allows clients to send JSON data to the server.
app.use(express.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded. Allows clients to send data to the server in a URL-encoded format.
app.use((req, res, next) => {
    req.shhh_secret = 'doggy';
    next();
})
app.get('/', (req, res) => {
    console.log('Hello, world!');
    res.status(200).json({ message: 'Hello, world!!!!' });
});

app.use('/api', protect, router);

export default app;