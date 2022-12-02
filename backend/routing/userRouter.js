import { Router } from 'express';
import { createUser, deleteUser, getAllUser, getSingleUser, updateUser } from '../controller/controller.js'

const userRouter = Router();

userRouter
.route('/api/users')
.get(getAllUser)
.post(createUser)

userRouter
.route('/api/users/:id')
.get(getSingleUser)
.put(updateUser)
.delete(deleteUser)

export default userRouter