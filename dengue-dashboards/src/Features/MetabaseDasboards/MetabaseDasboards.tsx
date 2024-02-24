import { useState, useEffect } from 'react';
import axios from 'axios';

const MetabaseDashboard = () => {
    const [iframeUrl, setIframeUrl] = useState('');
    const [isDashboardOn, setIsDashboardOn] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:3001/metabase')
            .then(response => {
                setIframeUrl(response.data.iframeUrl); // Correctly access the iframeUrl
                setIsDashboardOn(true);
            })
            .catch(error => {
                console.error('Error fetching Metabase dashboard URL', error);
            });
    }, []); // Removed the dependency on 'shitOk'

    return (
        <div>
            {isDashboardOn ? (
                <iframe
                    src={iframeUrl}
                    frameBorder="0"
                    width="800"
                    height="600"
                    
                ></iframe>
            ) : (
                <p>Loading dashboard...</p>
            )}
        </div>
    );
};

export default MetabaseDashboard;
