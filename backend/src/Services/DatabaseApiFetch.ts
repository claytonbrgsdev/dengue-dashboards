// DatabaseApiFetch.ts
import axios from 'axios';
import { Request, Response } from 'express';

export const fetchDataFromService = async (req: Request, res: Response): Promise<void> => {
  try {
    const response = await axios.get(
      'https://info.dengue.mat.br/api/alertcity?geocode=5300108&disease=dengue&format=json&ew_start=1&ew_end=50&ey_start=2010&ey_end=2024'
    );
    console.log(response.data);
    res.json(response.data); // Directly send JSON data
  } catch (error) {
    console.error('There was an error fetching the data:', error);
    res.status(500).send('Internal Server Error');
  }
};
