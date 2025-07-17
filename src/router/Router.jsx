import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import JobDetails from "../pages/JobDetails/JobDetails";
import MyApplications from "../pages/MyApplications/MyApplications";
import PrivateRoutes from "../routes/PrivateRoutes";
import JobApply from "../pages/JobApply/JobApply";
import AddJob from "../pages/AddJob/AddJob";
import MyPostedJob from "../pages/MyPostedJob/MyPostedJob";
import ViewApplication from "../pages/ViewApplication/ViewApplication";
import Jobs from "../pages/Jobs/Jobs";
import Blogs from "../pages/Blogs/Blogs";

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
        path: '/jobs',
        Component: Jobs
      },
      {
        path: 'myApplications',
        element: <PrivateRoutes><MyApplications /></PrivateRoutes>
      },
      {
        path: 'addJob',
        element: <PrivateRoutes><AddJob /></PrivateRoutes>,
      },
      {
        path: '/viewApplication/:job_id',
        element: <PrivateRoutes> <ViewApplication /> </PrivateRoutes>,
        loader: ({ params }) => fetch(`http://localhost:4000/applications/job/${params.job_id}`)
      },
      {
        path: '/myPostedJob',
        element: <PrivateRoutes> <MyPostedJob /> </PrivateRoutes>
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
        path: 'jobs/jobs/:id',
        Component: JobDetails,
        loader: ({ params }) => fetch(`http://localhost:4000/jobs/${params.id}`)
      },
      {
        path: 'blogs',
        Component: Blogs
      }
    ]
  }
])