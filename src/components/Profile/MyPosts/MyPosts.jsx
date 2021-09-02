import React from 'react'
import c from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            my Posts
            <div>new post</div>

            <div>
                <Post test='test1' message="Hi, how are you"/>
                <Post test='test2' message="This is my first post"/>
                <Post test='test3' />
                <Post test='test5' />
            </div>
        </div>
    )
}

export default MyPosts