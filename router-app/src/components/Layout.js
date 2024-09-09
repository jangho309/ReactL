import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const Layout = () => {
    // react-router-dom에서 제공하는 useNavigate라는 hook을 이용하면
    // Link 컴포넌트 없이도 링크로 이동하는 기능을 구현할 수 있다.
    const navi = useNavigate();

    // const movePage = (pageUrl) => {
    //     navi(pageUrl);
    // }

  return (
    <div>
        <header style={{background: 'lightgray', padding: 16, fontSize: 24}}>
            Header
            <button type='button' onClick={() => navi(-1)}>goBack</button>
            <button type='button' onClick={() => navi('/')}>Home</button>
            <button type='button' onClick={() => navi('/profile/고기천')}>Go's Profile</button>
            <button type='button' onClick={() => navi('/articles')}>Articles</button>
        </header>
        <main>
            {/** 중첩된 Route에 포함되어 있는 컴포넌트들이 표출될 영역 */}
            <Outlet/>
        </main>
    </div>
  );
};

export default Layout;