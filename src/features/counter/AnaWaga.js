import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { selectMyColor,getColor } from './cColorSlice';

function AnaWaga() {
    const myColor = useSelector(selectMyColor);
    const dispatch = useDispatch();

    return (
        <div style={{color:myColor}}> Your color is: {myColor}
        <hr/>
            <button style={{color:myColor}} onClick={()=>dispatch(getColor({color:"black"}))}>black</button>
            <button style={{color:myColor}} onClick={()=>dispatch(getColor({color:"pink"}))}>pink</button>
            <button style={{color:myColor}} onClick={()=>dispatch(getColor({color:"purple"}))}>purple</button>
        </div>
    )
}

export default AnaWaga


