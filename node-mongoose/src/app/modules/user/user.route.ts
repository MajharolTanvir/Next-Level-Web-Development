import express from "express";
import { createUser, getAdminUser, getUser, getUsers } from "./user.controller";
const router = express.Router();

router.get('/', getUsers);
router.get('/admins', getAdminUser);
router.get('/:id', getUser);
router.post('/create-user', createUser);

export default router