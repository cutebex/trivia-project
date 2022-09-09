import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router';

import { selectResults, isLoadingState } from '../redux/commonReducer';
import { Loading } from './loading';

interface IProps {
    children: React.FC;
}

const Protect = (props: IProps) => {
    const currentLocation = useLocation();
    const { children } = props;
    const navigate = useNavigate();
    const isLoading = useSelector(isLoadingState);
    const results = useSelector(selectResults);

    console.log(isLoading);
    
    if (results.length === 0 &&  currentLocation.pathname === '/results')
    {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(() => {
            navigate("/");
        }, [navigate]);
    }


    return <>{children}</>;
};

export default Protect;