import React, { useEffect, useState } from 'react'
import ListPostView from './ListPostView'
import axios from 'axios'

const ListPostController = () => {
    const [blogData, setBlogData] = useState([])
    const [showModal, setShowModal] = useState(false)
    const [userPosts, setUserPosts] = useState([])


    useEffect(()=>{
        axios.get("http://localhost:3030/post")
        .then((res)=>setBlogData(res.data))
    },[])

    const showUserPost = (param)=>{
      setShowModal(!showModal)
      setUserPosts(blogData.filter((post)=>post.user == param))
    }
  return (
    <ListPostView
    blogData = {blogData}
    showModal = {showModal}
    showUserPost = {showUserPost}
    userPosts = {userPosts}
    />
  )
}

export default ListPostController