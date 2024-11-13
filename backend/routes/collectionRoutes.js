import express from "express";
import { listCollections, getCollection } from "../controllers/collectionController.js";

const router = express.Router();

router.get("/:siteId", listCollections);
router.get("/:collectionId/details", getCollection);

export default router;
