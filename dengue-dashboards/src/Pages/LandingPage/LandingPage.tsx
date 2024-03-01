
import { useNavigate, Outlet } from "react-router-dom";

export default function LandingPage() {
    const navigate = useNavigate();

    const navigateToDataAnalysis = () => {
        navigate('/metabase-dashboards');
    };

    return (
        <div>
            <button onClick={navigateToDataAnalysis}>Data Analysis</button>
            <Outlet /> 
        </div>
    );
}
