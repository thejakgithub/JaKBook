import PropTypes from 'prop-types';
import React from 'react'
import './Post.css'

function Post({ id, title, deletePost, editPost }) {
    console.log(title);
    return (
        <div className="Post">
            <div className="dropdown">
                <div className="Post__popup" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" className="bi bi-three-dots" viewBox="0 0 16 16">
                        <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                    </svg>
                </div>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a className="dropdown-item" onClick={() => editPost(id)} ><i className="bi bi-pencil"></i> Edit</a></li>
                    <li><a className="dropdown-item" onClick={() => deletePost(id)}><i className="bi bi-trash"></i> Delete</a></li>
                </ul>
            </div>
            <div className="Post__title">{title}</div>
            <img className="Post__image" src={`https://source.unsplash.com/random?sig=${id}`} />
            <div> หัวใจ ความคิดเห็น</div>
            <div> กดไลค์</div>
            <div> ความคิดเห็น</div>
        </div>
    )
}

Post.prototype = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    deletePost: PropTypes.func.isRequired
};

export default Post;