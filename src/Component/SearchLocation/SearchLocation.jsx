/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react'
import SearchOptions from '../SearchOptions/SearchOptions';
import { weatherContext } from '../../Context/WeatherApiContext';
// import cities from 'cities.json';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const SearchLocation = ({ setSearch }) => {

    const { byInputSearch } = useContext(weatherContext)

    const [inputName, setInputName] = useState('')
    const [inputResults, setInputResults] = useState([])

    useEffect(() => {
        if (inputResults) {
            byInputSearch(inputResults)
        }
    }, [inputResults])

    // const Countries = [
    //     { label: "Albania", value: 355 },
    //     { label: "Argentina", value: 54 },
    //     { label: "Austria", value: 43 },
    //     { label: "Cocos Islands", value: 61 },
    //     { label: "Kuwait", value: 965 },
    //     { label: "Sweden", value: 46 },
    //     { label: "Venezuela", value: 58 }
    // ];

    const handleClick = () => {
        setInputResults(inputName)
        setSearch(true)
        setInputName('');
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault(); // Evita el comportamiento por defecto del Enter en formularios
            handleClick();
            console.log("click");
        }
    };


    return (
        <>
            <InputGroup className="mb-3">
                <Form.Control
                    placeholder="Input city"
                    aria-describedby="basic-addon2"
                    value={inputName} // Añade el valor del input controlado
                    onChange={e => setInputName(e.target.value.trimEnd())}
                    onKeyDown={handleKeyDown}
                />
                <Button variant="outline-secondary" id="button-addon2" onClick={handleClick} type='submit'>
                    Search
                </Button>
            </InputGroup>




            {/* <SearchOptions Countries={Countries} />  */}

        </>

    )

}

export default SearchLocation