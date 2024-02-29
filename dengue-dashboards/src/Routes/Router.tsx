import { createBrowserRouter } from "react-router-dom"
import Error from "../Pages/ErrorPage/Error";
import App from "../App";
import LandingPage from "../Pages/LandingPage/LandingPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error />,
        
        
        children: [
            {
                path: '/home', 
                index: true,
                element: <LandingPage/>,
                errorElement: <Error/>
            },
            {
                path: '/error', 
                errorElement: <Error/>
            }
        ]
    },

]);
