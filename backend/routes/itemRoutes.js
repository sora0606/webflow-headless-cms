import express from "express";
import { listItems } from "../controllers/itemsController.js";

const router = express.Router();

router.get("/:collectionId/items", listItems);

export default router;
