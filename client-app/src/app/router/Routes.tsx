import { createBrowserRouter, RouteObject } from "react-router-dom";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import ActivityForm from "../../features/activities/form/ActivityForm";
import App from "../layout/App";
import ActivityDetails from '../../features/activities/details/ActivityDetails';

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <App />,
        children: [
            {path: 'activities', element: <ActivityDashboard />},
            {path: 'activities/:id', element: <ActivityDetails />},
            {path: 'createActivity', element: <ActivityForm key="create" />},
            {path: 'edit/:id', element: <ActivityForm key="edit" />},
        ]
    }
]

export const router = createBrowserRouter(routes);