import express from "express";

import {
    getCategory,
    createCategory,
    editCategory,
    deleteCategory,
} from "../controller/category.js";

const category = express.Router();

category
    .get("/", getCategory)
    .post("/create", createCategory)
    .put("/edit",editCategory)
    .delete("/:id",deleteCategory)


export {category};