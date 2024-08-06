/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react'
import { weatherContext } from '../../Context/WeatherApiContext';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Link } from 'react-router-dom';

const SearchLocation = () => {

    const { byInputSearch, setShowSearchResult, setShowFavResult } = useContext(weatherContext)

    const [inputName, setInputName] = useState('')
    const [inputResults, setInputResults] = useState([])

    useEffect(() => {
        if (inputResults) {
            byInputSearch(inputResults, 'search')
        }
    }, [inputResults])


    const handleClick = () => {
        setInputResults(inputName.trim())
        setShowSearchResult(true)
        setShowFavResult(false)
        setInputName('');
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
        }
    };


    return (
        <InputGroup className="mb-3">
            <Form.Control
                placeholder="Input city"
                aria-describedby="basic-addon2"
                value={inputName}
                onChange={e => setInputName(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            <Button className='showFavButton' variant="outline-secondary" id="button-addon2" onClick={handleClick} type='submit'>
                <Link to={'/'} />
                Search
            </Button>
        </InputGroup>
    )

}

export default SearchLocation