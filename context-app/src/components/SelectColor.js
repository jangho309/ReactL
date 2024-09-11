import React from 'react'
import { DynamicColorContextConsumer } from '../context/dynamiccolor';

const colorArr = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const SelectColor = () => {
    return (
        <>
            <h1>색상선택</h1>
            <DynamicColorContextConsumer>
                {({actions}) =>
                    <div style={{display: 'flex'}}>
                        {colorArr && colorArr.map(
                            color => <div key={color}
                                          style={{
                                            width: '25px',
                                            height: '25px',
                                            background: color,
                                            cursor: 'pointer'
                                          }}
                                          onClick={() => actions.setColor(color)}
                                          onContextMenu={(e) => {
                                            e.preventDefault();
                                            actions.setSubcolor(color);
                                          }}></div>
                        )}
                    </div>
                }
            </DynamicColorContextConsumer>
            <hr></hr>
        </>
    );
};

export default SelectColor;