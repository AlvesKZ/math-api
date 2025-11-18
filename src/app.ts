import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
const app = express();

import BasicRoutes from './routes/basic.routes';

app.use(morgan('tiny'));

app.use(cors());

app.use(helmet());

app.use(express.json());

app.use('basic', BasicRoutes)

export default app; 