// import axios from 'axios';
// import { Request, Response } from 'express';
// import pool from './Database';

// export const fetchDataFromService = async (req: Request, res: Response): Promise<void> => {
//     try {
//         const externalApiResponse = await axios.get('https://info.dengue.mat.br/api/alertcity?geocode=5300108&disease=dengue&format=json&ew_start=1&ew_end=50&ey_start=2010&ey_end=2024');

//         const insertOrUpdateQuery = `
//             INSERT INTO dengue_data (
//                 data_iniSE, SE, casos_est, casos_est_min, casos_est_max, casos, p_rt1,
//                 p_inc100k, Localidade_id, nivel, id, versao_modelo, tweet, Rt, pop,
//                 tempmin, umidmax, receptivo, transmissao, nivel_inc, umidmed, umidmin,
//                 tempmed, tempmax, casprov, casprov_est, casprov_est_min, casprov_est_max,
//                 casconf, notif_accum_year
//             ) VALUES (
//                 $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16,
//                 $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27, $28, $29, $30
//             )
//             ON CONFLICT (id) DO UPDATE SET
//                 data_iniSE = EXCLUDED.data_iniSE,
//                 SE = EXCLUDED.SE,
//                 casos_est = EXCLUDED.casos_est,
//                 casos_est_min = EXCLUDED.casos_est_min,
//                 casos_est_max = EXCLUDED.casos_est_max,
//                 casos = EXCLUDED.casos,
//                 p_rt1 = EXCLUDED.p_rt1,
//                 p_inc100k = EXCLUDED.p_inc100k,
//                 Localidade_id = EXCLUDED.Localidade_id,
//                 nivel = EXCLUDED.nivel,
//                 versao_modelo = EXCLUDED.versao_modelo,
//                 tweet = EXCLUDED.tweet,
//                 Rt = EXCLUDED.Rt,
//                 pop = EXCLUDED.pop,
//                 tempmin = EXCLUDED.tempmin,
//                 umidmax = EXCLUDED.umidmax,
//                 receptivo = EXCLUDED.receptivo,
//                 transmissao = EXCLUDED.transmissao,
//                 nivel_inc = EXCLUDED.nivel_inc,
//                 umidmed = EXCLUDED.umidmed,
//                 umidmin = EXCLUDED.umidmin,
//                 tempmed = EXCLUDED.tempmed,
//                 tempmax = EXCLUDED.tempmax,
//                 casprov = EXCLUDED.casprov,
//                 casprov_est = EXCLUDED.casprov_est,
//                 casprov_est_min = EXCLUDED.casprov_est_min,
//                 casprov_est_max = EXCLUDED.casprov_est_max,
//                 casconf = EXCLUDED.casconf,
//                 notif_accum_year = EXCLUDED.notif_accum_year;
//         `;

//         for (const item of externalApiResponse.data) {
//             const values = [
//                 item.data_iniSE, item.SE, item.casos_est, item.casos_est_min, item.casos_est_max, item.casos, item.p_rt1,
//                 item.p_inc100k, item.Localidade_id, item.nivel, item.id, item.versao_modelo, item.tweet, item.Rt, item.pop,
//                 item.tempmin, item.umidmax, item.receptivo, item.transmissao, item.nivel_inc, item.umidmed, item.umidmin,
//                 item.tempmed, item.tempmax, item.casprov, item.casprov_est, item.casprov_est_min, item.casprov_est_max,
//                 item.casconf, item.notif_accum_year
//             ];
//             await pool.query(insertOrUpdateQuery, values);
//         }

//         res.status(200).json({ message: 'Data fetched and inserted/updated successfully' });
//     } catch (error) {
//         console.error('There was an error fetching the data:', error);
//         res.status(500).send('Internal Server Error');
//     }
// };
