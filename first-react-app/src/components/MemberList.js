import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MemberList = () => {
    const [memberList, setMemberList] = useState([]);

    // 어떤 값이 변경 됐을 때 작업을 실행할 지 지정할 수 있는 hook
    // []를 사용하면 초기렌더링때 작업이 실행된다.
    useEffect(() => {
        const getMembers = async () => {
            try {
                const response = await axios.get('http://localhost:9090/apis/members');
                console.log(response);
                setMemberList(response.data.dataPaging.content);
            } catch(e) {
                console.log(e);
            }
        }

        getMembers();
    }, []);
  return (
    <>
        {memberList && memberList.map(
            member => <p key={member.id}>{member.nickname}</p>)}
        <input></input>
    </>
  );
};

export default MemberList;