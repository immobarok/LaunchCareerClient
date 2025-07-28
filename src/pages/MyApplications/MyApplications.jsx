import React, { Suspense } from 'react';
import ApplicationStats from './ApplicationStats';
import ApplicationList from './ApplicationList';
import useAuth from '../../hooks/UseAuth';
import { myApplicationsPromise } from '../../api/applicationsApi';

const MyApplications = () => {

  const { user } = useAuth();
  //console.log('token firebase token', user.accessToken)

  return (
    <div className='my-20 max-w-6xl mx-auto'>
      <ApplicationStats myApplicationsPromise={myApplicationsPromise(user.email, user.accessToken)} ></ApplicationStats>
      <Suspense fallback={'Loading...'}>
        <ApplicationList
          myApplicationsPromise={myApplicationsPromise(user.email, user.accessToken)}
        ></ApplicationList>
      </Suspense>
    </div>
  );
};

export default MyApplications;