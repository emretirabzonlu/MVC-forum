import React from 'react'
import Header from '../../components/Header'

const ListPostView = ({ blogData }) => {
    return (
        <>
            <Header />
            <div className='container'>
                {blogData.map((post) => (
                    <div className='post' key={post.id}>
                        <div className='post-info'>
                            <h1>{post.title}</h1>
                            <p>{post.user}</p>
                        </div>
                        <p className='post-text'>{post.text}</p>

                    </div>
                ))}
            </div>
        </>
    )
}

export default ListPostView