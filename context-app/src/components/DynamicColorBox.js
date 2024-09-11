import React from 'react';
import { DynamicColorContextConsumer } from '../context/dynamiccolor';

const DynamicColorBox = () => {
  return (
    <DynamicColorContextConsumer>
        {({state}) =>
            <div>
                <div style={{width: '100px', height: '100px', background: state.color}}></div>
                <div style={{width: '50px', height: '50px', background: state.subcolor}}></div>
            </div>
        }
    </DynamicColorContextConsumer>
  );
};

export default DynamicColorBox;