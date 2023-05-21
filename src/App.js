import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListPostController from "./pages/ListPost/ListPostController";
import './styles/style.css'
import AddPostController from "./pages/AddPost/AddPostController";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListPostController/>}/>
        <Route path="/add-post" element={<AddPostController/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
