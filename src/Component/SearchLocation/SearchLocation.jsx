/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import SearchOptions from '../SearchOptions/SearchOptions';
import { weatherContext } from '../../Context/WeatherApiContext';


const SearchLocation = () => {


    const { byInputSearch } = useContext(weatherContext)

    const [inputName, setInputName] = useState('')

    useEffect(() => {
        if (inputName) {
            console.log(inputName);
            byInputSearch(inputName)
        }
    }, [inputName])


    return (
        <InputGroup className="mb-3">
            <Form.Control

                placeholder="Recipient's username"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                value={inputName}
                onChange={e => setInputName(e.target.value)}
            />
            {/* tengo que poner un componente que traiga un array con todas las coincidencias */}
            <SearchOptions />

            <Button variant="outline-secondary" id="button-addon2" >
                Button
            </Button>
        </InputGroup>
    )
}

export default SearchLocation
