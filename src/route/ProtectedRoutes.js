import React from 'react'

import { Navigate } from 'react-router-dom';

export default function ProtectedRoutes({children}) {
    const role='teacher';
    if (role==='student') {
        alert('you are not allowed to this route')
        return<Navigate to='/home' replace/>
    }
  return children;
}
