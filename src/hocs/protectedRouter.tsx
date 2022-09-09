import { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router';

export type ProtectedRouteProps = {
  isResult: boolean;
  authenticationPath: string;
  redirectPath: string;
  setRedirectPath: (path: string) => void;
  outlet: JSX.Element;
};

export default function ProtectedRoute({isResult, authenticationPath, redirectPath, setRedirectPath, outlet}: ProtectedRouteProps) {
  const currentLocation = useLocation();

  useEffect(() => {
    if (!isResult) {
      setRedirectPath(currentLocation.pathname);
    }
  }, [isResult, setRedirectPath, currentLocation]);

  console.log("isResult: ", isResult);
  console.log("redirectPath is ", redirectPath);
  console.log("currentpath is ", currentLocation.pathname);
  if(isResult && redirectPath === currentLocation.pathname) {
    return outlet;
  } else {
    return <Navigate to={{ pathname: isResult ? redirectPath : authenticationPath }} />;
  }
};