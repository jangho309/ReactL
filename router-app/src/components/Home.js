import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
        <h1>Home</h1>
        <ul>
            <li>
                {/**링크로 이동하는 버튼을 구현할 때는
                 * react-router-dom에서 제공하는 Link 컴포넌트를 사용한다.
                 *  to 속성: 이동할 url을 지정하는 속성이고 Route의 path속성에 지정되어 있는
                 *           url과 일치하는 컴포넌트로 이동한다.
                 */}
                 <Link to='/introduce'>Introduce</Link>
            </li>
            <li>
                <Link to='/profile/고기천'>고기천 프로필</Link>
            </li>
            <li>
                <Link to='/profile/홍길동'>홍길동 프로필</Link>
            </li>
            <li>
                <Link to='/profile/null'>Null 프로필</Link>
            </li>
            <li>
                <Link to='/articles'>Articles</Link>
            </li>
            <li>
                <Link to='/login'>Login</Link>
            </li>
            <li>
                <Link to='/mypage'>Mypage</Link>
            </li>
        </ul>
    </div>
  );
};

export default Home;