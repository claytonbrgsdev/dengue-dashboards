import express from 'express';
import { getMetabaseEmbedding } from '../Services/DashboardEmbedding';
import { fetchDataFromService } from '../Services/DatabaseApiFetch'; // Updated import

const router = express.Router();

router.get('/metabase', getMetabaseEmbedding);
router.get('/data-service', fetchDataFromService); // Using the service as a controller

export default router;
