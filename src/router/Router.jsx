import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import JobDetails from "../pages/JobDetails/JobDetails";
import MyApplications from "../pages/MyApplications/MyApplications";
import PrivateRoutes from "../routes/PrivateRoutes";
import JobApply from "../pages/JobApply/JobApply";
import AddJob from "../pages/AddJob/AddJob";

export const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: 'myApplications',
        element: <PrivateRoutes><MyApplications /></PrivateRoutes>
      },
      {
        path: 'addJob',
        element: <PrivateRoutes><AddJob /></PrivateRoutes>
      },
      {
        path: 'jobApply/:id',
        element: <PrivateRoutes><JobApply /></PrivateRoutes>
      },
      {
        path: 'jobs/:id',
        Component: JobDetails,
        loader: ({ params }) => fetch(`http://localhost:4000/jobs/${params.id}`)
      },
      {
        path: 'jobApply/:id'
      }
    ]
  }
])