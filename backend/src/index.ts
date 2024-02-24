import express from 'express';
import cors from 'cors';
import router from './Routes/routes';

const app = express();
app.use(express.json());

app.use(cors({
    origin: process.env.CORS_ORIGIN?.split(',') || [
      'http://34.66.213.101:3000', 
      'http://localhost:5173', 
      "http://34.66.213.101:5432", 
      "http://localhost:3001"
    ],
    credentials: true,
}));

app.use('/api', router);

app.listen(3001, () => {
    console.log('Server started on port 3001');
});
