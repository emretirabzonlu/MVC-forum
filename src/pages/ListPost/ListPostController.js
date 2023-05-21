import React, { useEffect, useState } from 'react'
import ListPostView from './ListPostView'
import axios from 'axios'

const ListPostController = () => {
    const [blogData, setBlogData] = useState([])


    useEffect(()=>{
        axios.get("http://localhost:3030/post")
        .then((res)=>setBlogData(res.data))
    },[])
  return (
    <ListPostView
    blogData = {blogData}
    />
  )
}

export default ListPostController