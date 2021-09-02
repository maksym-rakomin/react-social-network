import React from 'react'
import c from "./Post.module.css"

const Post = (props) => {
    return (
        <div>
            { props.test }, { props.message }
        </div>
    )
}

export default Post