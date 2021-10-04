import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom"
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

const App = ({data, addPost}) => {
    const {profilePage, messagesPage} = data

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper__content">
                    <Route path="/profile" component={() => <Profile posts={profilePage.posts} addPost={addPost}/>}/>
                    <Route path="/dialogs"
                           render={() => <Dialogs users={messagesPage.users} messages={messagesPage.messages}/>}/>
                    <Route path="/news" component={() => <News/>}/>
                    <Route path="/music" component={() => <Music/>}/>
                    <Route path="/settings" component={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
