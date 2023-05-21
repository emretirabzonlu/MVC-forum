import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({addLink}) => {
  return (
   <header>
    <h1>Forum</h1>
    {addLink ? (
      <Link to={"/"}>Anasayfaya dön</Link>
    ) : (
      <Link to={"/add-post"}>Gönderi oluştur</Link>
    )}
   </header>
  )
}

export default Header