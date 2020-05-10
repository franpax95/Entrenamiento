import React, { useState, useEffect } from 'react';
import './styles/Counter.css';

const Counter = (props) => {
    const [currentRep, setCurrentRep] = useState(0);

    useEffect(() => {
        setCurrentRep(0);
    }, [props.currentKey]);

    const handleMinusButton = () => {
        if(currentRep > 0) setCurrentRep(currentRep - 1);
    }

    const handlePlusButton = () => {
        if(currentRep < props.nRep) setCurrentRep(currentRep + 1);
    }

    return (
        <div className="Counter">
            <button onClick={handleMinusButton}>
                <i className="fa fa-minus"></i>
            </button>
            <div className="info">
                {currentRep}
            </div>
            <button onClick={handlePlusButton}>
                <i className="fa fa-plus"></i>
            </button>
        </div>
    )
}

export default Counter;