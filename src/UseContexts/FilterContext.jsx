import React, { createContext, useContext, useState } from 'react';

export const FilterContext = createContext()

export const FilterProvider = ({ children }) => {

    const [distMin, setDistMin] = useState(0);
    const [distMax, setDistMax] = useState(Infinity);

    const [rentMin, setRentMin] = useState(0);
    const [rentMax, setRentMax] = useState(Infinity);

    const [roomates, setRoomates] = useState(true);
    const [sublease, setSublease] = useState(true);
    const [renting, setRenting] = useState(true) ;

    const setDistance = (min, max) => {
        setDistMin(min)
        setDistMax(max)
    }

    const setRent = (min, max) => {
        setRentMin(min)
        setRentMax(max)
    }

    const getQueries = () => {
        console.log(distMin, distMax)
        console.log(rentMin, rentMax)
    }

    return (
        <FilterContext.Provider value={{ distMin, distMax, rentMin, rentMax, roomates, sublease, renting, setDistance, setRent, getQueries }}>
            { children }
        </FilterContext.Provider>
    )
}