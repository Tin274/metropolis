import db from '../mongooseDB/db.js';
import User from '../mongooseschema/UserSchema.js';


export const getAllUser = async(req, res) => {
  const userList = await User.find();
  res.status(200).json(userList)
}


export const getSingleUser = async(req, res) => {
  const {id} = req.params;
  const selectedUser = await User.findById(id);
  res.status(200).json({selectedUser})
}


export const createUser = (req, res) => {
  const {firstname, lastname, age} = req.body;
  User
    .create({firstname: firstname, lastname: lastname, age: age})
    .then(newUser => res.status(200).json(newUser))
    .catch(err => res.status(200).json(err.message))
}

export const deleteUser = async (req, res) => {

  const {id} = req.params;

  try{
    const deletedUser = User.findOneAndDelete({_id: id});
    res.status(200).json({msg: `user mit ID ${id} ist gelöscht`})
  } catch(err){
    console.log(err)
  }

  res.status(200).json({msg: "deleted user"})
}

export const updateUser = async (req, res) => {
  const {firstname, lastname, age} = req.body;
  const {id} = req.params;

  try{
    const updatedUser = await User.findOneAndUpdate({_id: id}, {firstname: firstname, lastname: lastname, age: age})
    console.log(updateUser);
    res.status(200).send(updateUser)
  } catch(err) {
    console.log(err)
  }
}