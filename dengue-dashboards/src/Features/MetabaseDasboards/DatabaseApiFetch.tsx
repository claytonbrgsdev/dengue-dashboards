import { useState } from "react";
import axios from "axios";

const DatabaseApiFetch = () => {
    const [data, setData] = useState('');
    const fetchData = () => {
        axios.get('http://localhost:3001/api/data-service')
            .then(response => {
                console.log(response.data);
                setData(response.data); // Save the data in state
            })
            .catch(error => {
                console.error('Error fetching data from service', error);
            });
    };
    return (
        <div>
            <button onClick={fetchData}>Fetch Data</button>
            {/* Display data or a message */}
            <div>{data ? <h2>data fetched!</h2> : <p>No data fetched yet</p>}</div> 
        </div>
    );
};

export default DatabaseApiFetch;
