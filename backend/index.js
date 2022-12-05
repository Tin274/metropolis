import express from 'express';
const app = express();
const PORT = 3333;
import userRouter from './routing/userRouter.js';
import cors from 'cors';

app.use(express.json());
app.use(cors());

app.use('/', userRouter)

app.listen(PORT, () => console.log(`Server listen to PORT ${PORT}`));

