import { Router } from 'express';
import { deleteUser, getAllUser, getSingleUser, updateUser,loginUser,registerUser } from '../controller/controller.js'

const userRouter = Router();

userRouter
    .route('/api/users')
    .get(getAllUser)

userRouter
    .route('/api/users/login')
    .post(loginUser)

userRouter
    .route('/api/users/signup')
    .post(registerUser)

userRouter
    .route('/api/users/:id')
    .get(getSingleUser)
    .put(updateUser)
    .delete(deleteUser)

export default userRouter