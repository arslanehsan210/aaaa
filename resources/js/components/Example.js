import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { useState } from 'react';
import Detail from './Detail';
import Home from './Home';

import { BrowserRouter,Routes,Route } from 'react-router-dom';
function Example() {
    const [first, setfirst] = useState('');
    // const baseUrl = 'http://127.0.0.1:8000/api/';
    // axios.get(`${baseUrl}course`)
    // .then(res => {
    //      console.log(res.data);
    //      setfirst(res.data);
        
    // })
    return (
        <>
    
<Routes>
    < Route exact path='/' element={ <Home/> }/>
    < Route exact path='/course' element={ <Detail/> }/>
</Routes>

   
    </>
    );
}

export default Example;

if (document.getElementById('user')) {
    ReactDOM.render(
        <BrowserRouter>
    <Example />
    </BrowserRouter>
    , document.getElementById('user'));
}
