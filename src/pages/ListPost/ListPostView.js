import React from 'react'
import Header from '../../components/Header'
import Modal from '../../components/Modal'

const ListPostView = ({ blogData, showModal, showUserPost, userPosts }) => {
    return (
        <>
            <Header />
            <div className='container'>
                {blogData.map((post) => (
                    <div className='post' key={post.id}>
                        <div className='post-info'>
                            <h1>{post.title}</h1>
                            <p onClick={()=>showUserPost(post.user)}>{post.user}</p>
                        </div>
                        <p className='post-text'>{post.text}</p>

                    </div>
                ))}
            </div>
            <Modal showModal = {showModal} userPosts={userPosts} />
        </>
    )
}

export default ListPostView