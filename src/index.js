import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const data = {
    posts: [
        {id: 1, message: 'test post 1', likesCount: 12},
        {id: 2, message: 'test post 2', likesCount: 2},
        {id: 3, message: 'test post 3', likesCount: 4},
        {id: 4, message: 'test post 4', likesCount: 6},
        {id: 5, message: 'test post 5', likesCount: 1},
    ],
    users: [
        {id: 1, name: 'test 1'},
        {id: 2, name: 'test 2'},
        {id: 3, name: 'test 3'},
        {id: 4, name: 'test 4'},
        {id: 5, name: 'test 5'},
    ],
    messages: [
        {id: 1, message: 'test message 1'},
        {id: 2, message: 'test message 2'},
        {id: 3, message: 'test message 3'},
        {id: 4, message: 'test message 4'},
        {id: 5, message: 'test message 5'},
    ],
}


ReactDOM.render(
    <React.StrictMode>
        <App data={data}/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
