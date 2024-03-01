import { createBrowserRouter } from "react-router-dom";
import Error from "../Pages/ErrorPage/Error";
import App from "../App";
import LandingPage from "../Pages/LandingPage/LandingPage";
import MetabaseDashboards from "../App/DataAnalysis/MetabaseDashboards";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <LandingPage />,
        children: [
          {
            path: 'metabase-dashboards',
            element: <MetabaseDashboards />,
            errorElement: <Error />,
          },
        ],
      },
      {
        path: '/error',
        errorElement: <Error />,
      },
    ],
  },
]);
