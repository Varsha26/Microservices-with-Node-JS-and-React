import React from 'react';
import PostCreate from "./PostCreate";
import PostList from "./PostList";

export default () => {
    return (
        <div className="container">
            <h1>Blog Application</h1>
            <hr />
            <h3>Create Post</h3>
            <PostCreate />
            <hr />
            <h3>Posts</h3>
            <PostList />
        </div>
    )
}
