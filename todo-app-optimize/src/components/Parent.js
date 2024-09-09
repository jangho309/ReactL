import React, {useEffect} from 'react';

const Parent = ({children}) => {
    useEffect(() => {
        console.log(children);
    }, []);
  return (
    <div>
        {children}
    </div>
  );
};

export default Parent;