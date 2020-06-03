import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        // GET, POST, PUT, DELETE
        getFetch("https://assets.breatheco.de/apis/fake/todos/user/lrodriguez");
    }, [])


    async function getFetch(url) {
        /* fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(resp => {
                console.log(resp)
                return resp.json()
            })
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.log(error);
            }) */

        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const data = await response.json();

        console.log(data);
        
    }

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />


                <ul>



                </ul>
            </header>
        </div>
    );
}

export default App;
