import express from "express";
import { createUser, getUsers, getUsersById } from "./user.controller";


const router = express.Router();

router.get('/', getUsers);
router.post('/create-user', createUser);
router.get('/:id', getUsersById)

export default router;