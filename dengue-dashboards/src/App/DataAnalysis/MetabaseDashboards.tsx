import { useEffect, useState } from 'react';
import axios from 'axios'; 
import MetabaseEmbedding from "./MetabaseEmbedding";
import { dataService } from './APIFetch'; 

export default function MetabaseDashboards() {
    const [isDataFetched, setIsDataFetched] = useState(false);
    const [fetchedData, setFetchedData] = useState(null);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await axios.get(dataService); 
    //             console.log(response.data);
    //             setFetchedData(response.data); 
    //             setIsDataFetched(true); 
    //         } catch (error) {
    //             console.error('Error fetching data from service', error);
    //         }
    //     };

    //     fetchData(); 
    // }, []); 

    return (
        <div>
            {isDataFetched ? <MetabaseEmbedding /> : <p>Loading data...</p>}
        </div>
    );
}
