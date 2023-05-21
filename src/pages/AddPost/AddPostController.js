import React, { useState } from 'react'
import AddPostView from './AddPostView'
import addPostModal from './AddPostModal'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AddPostController = () => {
    const navigate = useNavigate()
    const modal = new addPostModal()
    const [form, setForm] = useState(modal.state)

    const onInputChange = (label, value) => {
        var newInputState = { ...form }
        newInputState[label] = value
        setForm(newInputState)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        var letters = /^[A-Za-z]+$/;

        if (!form.title || !form.user || !form.text) {
            alert('Formu Doldurun');
            return;
        } else if (!form.title.match(letters)) {
            alert('Başlıkta sayı kullanamazsınız');
            return;
        }
        axios.post("http://localhost:3030/post", form)
            .then(
                navigate("/")
            )
    }

    return <AddPostView onInputChange={onInputChange} handleSubmit={handleSubmit} />
}

export default AddPostController