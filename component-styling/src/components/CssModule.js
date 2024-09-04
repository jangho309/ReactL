import React from 'react';
// module.css 파일의 스타일들은 styles 변수로 import 한다.
import styles from '../cssmodule/CssModule.module.css';

const CssModule = () => {
  return (
    <div>
        <div className={`${styles.wrapper} ${styles.inverted}`}>
            CssModule
            {/** 전역 스타일(:global) 적용*/}
            <span className='text'>Sass</span>
        </div>
    </div>
  );
};

export default CssModule;