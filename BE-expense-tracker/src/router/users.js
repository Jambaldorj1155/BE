import express from "express";

import {
    getUser,
    createUser,
    editUser,
    deleteUser,
} from "../controller/users.js";

const users = express.Router();

users
    .get("/", getUser)
    .post("/create", createUser)
    .put("/edit",editUser)
    .delete("/:id",deleteUser)


export {users};