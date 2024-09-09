import React from 'react';
import { useParams } from 'react-router-dom';

const profiles = {
    고기천: {
        name: '고기천',
        job: '강사'
    },
    홍길동: {
        name: '홍길동',
        job: '의적'
    }
};

const Profile = () => {
    // react-router-dom에서 제공하는 useParams라는 hook으로 전달된
    // url 파라미터를 받아줄 수 있다.
    // const params = useParams();
    // useParams hook은 객체를 리턴해주기 때문에 
    // 객체의 비구조화 할당을 통해 변수로 값을 직접 전달받을 수도 있다.
    const {name} = useParams();

    const selectedProfile = profiles[name];
  return (
    <div>
        <h1>Profile</h1>
        {/* <p>{name}</p> */}
        {selectedProfile ?
            <div>
                <h2>{selectedProfile.name}</h2>
                <h2>{selectedProfile.job}</h2>
            </div>
            : <h2>Not Exsited Profile</h2>
        }
    </div>
  );
};

export default Profile;