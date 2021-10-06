import React from 'react'
import c from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = ({addPost, posts, updateNewPostText, newPostText}) => {
    const postElements = posts.map(post => <Post key={post.id} test={post.likesCount} message={post.message}/>)
    const newPostElement = React.createRef()
    const addPostLocal = () => addPost()
    const onPostChange = () => updateNewPostText(newPostElement.current.value)

    return (
        <div className={c.myPosts}>
            <h3>my Posts</h3>

            <div>
                <textarea
                    onChange={onPostChange}
                    ref={newPostElement}
                    name=""
                    id=""
                    cols="60"
                    rows="4"
                    value={newPostText}
                />
            </div>

            <div>
                <button onClick={addPostLocal}>add post</button>
            </div>

            <div>
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts
