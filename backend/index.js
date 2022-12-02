import express from 'express';
const app = express();
const PORT = 3333;
import userRouter from './routing/userRouter.js';

app.use(express.json());

app.use('/', userRouter)

app.listen(PORT, () => console.log(`Server listen to PORT ${PORT}`));

