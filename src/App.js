import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom"
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {addMessage} from "./redux/state";

const App = (props) => {

    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper__content">
                <Route
                    path="/profile"
                    render={() =>
                        <Profile
                            profilePage={props.state.profilePage}
                            addPost={props.addPost}
                            updateNewPostText={props.updateNewPostText}
                        />}
                />
                <Route path="/dialogs"
                       render={() => <Dialogs
                           users={props.state.messagesPage.users}
                           messages={props.state.messagesPage.messages}
                           currentMessage={props.state.messagesPage.currentMessage}
                           addMessage={props.addMessage}
                           updateNewMessage={props.updateNewMessage}
                       />}/>
                <Route path="/news" render={() => <News/>}/>
                <Route path="/music" render={() => <Music/>}/>
                <Route path="/settings" render={() => <Settings/>}/>
            </div>
        </div>
    );
}

export default App;
