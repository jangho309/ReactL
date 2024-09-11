import React from 'react'
import StaticColorContext from '../context/staticcolor';

const StaticColorBox = () => {
    return (
        <>
            {/**
             *   3. context의 Consumer를 통해서
             *      context 상태변수의 값을 전달 받아 사용한다.
             */}
             <StaticColorContext.Consumer>
                {valueProps =>
                    <div style={{
                        width: '100px',
                        height: '100px',
                        background: valueProps.color // <= 객체하나가 지정되는 거다
                    }}>
                    </div>
                }
             </StaticColorContext.Consumer>
        </>
    );
};

export default StaticColorBox;