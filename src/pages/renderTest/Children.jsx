import React, {memo} from 'react';

const Children = (props) => {
    const { num1 } = props;
    return (
        <div style={{fontSize: 30, marginTop: 30, marginBottom: 30}}>
            children: {num1}
        </div>
    );
};

export default memo(Children);