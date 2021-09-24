import React from 'react'
import c from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = () => {

    const posts = [
        {id: 1, message: 'test post 1', likesCount: 12},
        {id: 2, message: 'test post 2', likesCount: 2},
        {id: 3, message: 'test post 3', likesCount: 4},
        {id: 4, message: 'test post 4', likesCount: 6},
        {id: 5, message: 'test post 5', likesCount: 1},
    ]

    const postElements = posts.map(post => <Post key={post.id} test={post.likesCount} message={post.message}/>)

    return (
        <div className={c.myPosts}>
            <h3>my Posts</h3>

            <div>
                <textarea name="" id="" cols="30" rows="10"/>
            </div>

            <div>
                <button>add post</button>
            </div>

            <div>
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts
