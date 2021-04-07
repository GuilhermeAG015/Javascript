import React, { useState, useEffect } from 'react';
import ContainerData, { DataHoraSpan } from './Date.styles';

const Data = () => {
    const [dateTime, setDateTime] = useState(new Date());

    useEffect(() => {
        const id = setInterval(() => setDateTime(new Date()), 1000);
        return () => {
            clearInterval(id);
        }
    }, []);

    return (
        <ContainerData>
            <span>Today is <DataHoraSpan>{`${dateTime.toLocaleDateString()}`}</DataHoraSpan></span>
            <span>The time is <DataHoraSpan>{`${dateTime.toLocaleTimeString()}`}</DataHoraSpan></span>
        </ContainerData>
    );

}

export default Data