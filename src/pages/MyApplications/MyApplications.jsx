import React, { Suspense } from 'react';
import ApplicationStats from './ApplicationStats';
import ApplicationList from './ApplicationList';
import useAuth from '../../hooks/UseAuth';
import { myApplicationsPromise } from '../../api/ApplicationsApi';

const MyApplications = () => {

  const { user } = useAuth();

  return (
    <div className='my-20 max-w-6xl mx-auto'>
      <ApplicationStats></ApplicationStats>
      <Suspense fallback={'loading your applications'}>
        <ApplicationList
          myApplicationsPromise={myApplicationsPromise(user.email)}
        ></ApplicationList>
      </Suspense>
    </div>
  );
};

export default MyApplications;