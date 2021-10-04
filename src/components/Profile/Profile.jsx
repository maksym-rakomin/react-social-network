import React from "react";
import c from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({posts, addPost}) => {
    return (
        <main className={c.main}>

            <ProfileInfo />

            <MyPosts posts={posts} addPost={addPost}/>
        </main>
    )
}

export default Profile
