import React, { useEffect, useState } from 'react';

const CssVariable = () => {
    // 스타일 객체로 선언해서 DOM의 style 속성에 전달
    const [style, afterStyle] = useState({
        textAlign: 'center', 
        color: 'green', 
        backgroundColor: 'skyblue', 
        fontSize: '48px'
    });

    useEffect(() => {
        setTimeout(() => {
            afterStyle({
                textAlign: 'left', 
                color: 'blue', 
                backgroundColor: 'yellow', 
                fontSize: '12px'
            });
        }, 3000);
    });
    
    // useEffect(() => {
        
    // }, [style, afterStyle]);

    // setTimeout(() => {
    //     afterStyle({
    //         textAlign: 'left', 
    //         color: 'blue', 
    //         backgroundColor: 'yellow', 
    //         fontSize: '12px'
    //     });
    // }, 3000);

    return (
        <p style={style}>Component Styling</p>
    );
    
};

export default CssVariable;