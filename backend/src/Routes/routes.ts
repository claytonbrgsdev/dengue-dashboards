import express from 'express';
import { getMetabaseEmbedding } from '../Services/DashboardEmbedding';
// import { fetchDataFromService } from '../Services/DatabaseApiFetch';

const router = express.Router();

// Route to get the Metabase embedding iframe URL
router.get('/metabase', getMetabaseEmbedding);

// Route to fetch data from the external API and insert or update it in the database
// router.get('/data-service', fetchDataFromService);

export default router;
