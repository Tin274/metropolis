import db from "../mongooseDB/db.js";
import User from "../mongooseschema/UserSchema.js";
import mongoose from "mongoose";

export const getAllUser = async (req, res) => {
    const userList = await User.find();
    res.status(200).json(userList);
};

export const registerUser = (req, res) => {
    const { name, email, password } = req.body;
    User.findOne({ email: email }, async (err, user) => {
        if (err) {
            console.log(err);
        } else {
            if (!user) {
                User.create({ name: name, email: email, password: password })
                    .then((newUser) =>
                        res.status(200).json({ msg: "user signed up" })
                    )
                    .catch((err) => res.status(200).json(err.message));
            } else {
                res.status(404).json({ msg: "email ist schon verwendet" });
            }
        }
    });
    // res.status(200).json({msg : "user signed up"});
};

export const getSingleUser = async (req, res) => {
    const { id } = req.params;
    const selectedUser = await User.findById(id);
    res.status(200).json({ selectedUser });
};

export const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedUser = await User.findOneAndDelete({ _id: id });
        res.status(200).json({ msg: `user mit ID ${id} ist geloescht` });
    } catch (err) {
        console.log(err);
    }
};

export const updateUser = async (req, res) => {
    const { name, email, password } = req.body;
    const { id } = req.params;

    try {
        const updatedUser = await User.findOneAndUpdate(
            { _id: id },
            { name: name, email: email, password: password }
        );
        console.log(updateUser);
        res.status(200).send(updateUser);
    } catch (err) {
        console.log(err);
    }
};

export const loginUser = (req, res) => {
    const { email, password } = req.body;

    // console.log(`email: ${email} und password: ${password}`)
    User.findOne({ email: email }, async (err, user) => {
        if (err) {
            console.log(err);
        } else {
            if (user) {
                if (user.password === password) {
                    console.log("user ist in data base");
                    const updatedUser = await User.findOneAndUpdate(
                        { _id: user.id },
                        { logged: true }
                    );
                    console.log("updatedUser", updatedUser);
                    res.status(200).json({ msg: "user logged in" });
                } else {
                    console.log("passwort ist falsch");
                    res.status(200).json({ msg: "passwort ist falsch" });
                }
            } else {
                console.log("username ist falsch");
                res.status(200).json({ msg: "username ist falsch" });
            }
        }

        //  console.log(user)
    });
};
