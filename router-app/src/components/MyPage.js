import React, {useEffect} from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const MyPage = () => {
    // 컴포넌트가 표출되는 순간 다른 페이지로 이동하려면 Navigate 컴포넌트를 사용한다.
    const isLogin = false;
    const navi = useNavigate();

    // if(!isLogin)
    //     return <Navigate to='/login'/>

    useEffect(() => {
        if(!isLogin)
            navi('/login');
    }, []);
    
  return (
    <div>MyPage</div>
  );
};

export default MyPage;