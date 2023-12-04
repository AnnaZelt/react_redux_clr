import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    changeColorBlack,
    changeColorBurgundy,
    changeColorPink,
    getColor,
    selColor
    
} from './ChangeColorSlice';

const selectColor = () => {

    // const co/lor = useSelector(selColor);
    // const dispatch = useDispatch();

    return (
        <div style={{ color: "" }}>
            <h1>Your color is: {""}</h1>
            {/* <button
                onClick={() => dispatch(getColor())}>
                pink
            </button> */}
        </div>
    );
}

export default selectColor