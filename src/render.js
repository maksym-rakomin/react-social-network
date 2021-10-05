import React from 'react';
import ReactDOM from "react-dom";
import './index.css';
import App from "./App";
import {addPost, updateNewPostText, updateNewMessage, addMessage} from "./redux/state";
import {BrowserRouter} from "react-router-dom";

export const rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                state={state}
                addPost={addPost}
                updateNewPostText={updateNewPostText}
                updateNewMessage={updateNewMessage}
                addMessage={addMessage}
            />
        </BrowserRouter>
        ,
        document.getElementById('root')
    );
}
