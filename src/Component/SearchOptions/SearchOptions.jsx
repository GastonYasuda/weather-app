/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react'
import { weatherContext } from '../../Context/WeatherApiContext';
import Select, { components } from 'react-select';


const SearchOptions = ({ Countries }) => {


    const [inputOption, setInputOption] = useState([])


    const { bySearch } = useContext(weatherContext)

    const Group = () => (
        <div>
            <components.Group />
        </div>
    );


    useEffect(() => {
        if (bySearch !== undefined && bySearch.name) {
            console.log(bySearch);
            console.log(bySearch.name);
            setInputOption(prevResults => [...prevResults, bySearch.name]);
        }

    }, [bySearch]);



    //tiene que darme todos los que coinciden en un array

    return (
        <Select
            //      onChange={(choice) => setUserChoice(choice.label)}

            // options={Countries} //countries tiene que traer todos las ciudades
            components={{ Group }}
        >

        </Select>
    )
}

export default SearchOptions
