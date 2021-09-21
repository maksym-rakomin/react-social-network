import React from "react";
import c from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
    return (
        <main className={c.main}>
            {/*<div>*/}
            {/*    <img*/}
            {/*        src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"*/}
            {/*        alt="..."*/}
            {/*    />*/}
            {/*</div>*/}

            <ProfileInfo />

            <MyPosts />
        </main>
    )
}

export default Profile
