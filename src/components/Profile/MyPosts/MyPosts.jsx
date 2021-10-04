import React from 'react'
import c from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = ({posts}) => {
    const postElements = posts.map(post => <Post key={post.id} test={post.likesCount} message={post.message}/>)
    const newPostElement = React.createRef()
    const addPost = () => {
        const text = newPostElement.current.value
        console.log('textarea', text)
    }

    return (
        <div className={c.myPosts}>
            <h3>my Posts</h3>

            <div>
                <textarea ref={newPostElement} name="" id="" cols="30" rows="10"/>
            </div>

            <div>
                <button onClick={ addPost }>add post</button>
            </div>

            <div>
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts
