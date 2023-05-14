import express from "express";
import { createUser, getUser, getUsers } from "./user.controller";
const router = express.Router();

router.get('/', getUsers);
router.post('/create-user', createUser);
router.get('/:id', getUser);

export default router