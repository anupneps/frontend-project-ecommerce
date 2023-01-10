import React, { useState } from 'react'
import { testProductData } from '../test/test-data/productTestData'
import { Product } from '../types/product'

const AdminPage = () => {
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [catId, setCatId] = useState('')
    const [file, setFile] = useState('')
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }
    return (
        <form onSubmit={(e) => handleSubmit(e)} >
            <input onChange={(e) => setTitle(e.target.value)} type={'text'} name={'title'} placeholder={'Title'}></input>
            <input onChange={(e) => setPrice(e.target.value)} type={'number'} name={'price'} placeholder={'Price'}></input>
            <input onChange={(e) => setDescription(e.target.value)} type={'text'} name={'description'} placeholder={'Description'}></input>
            <input onChange={(e) => setCatId(e.target.value)} type={'number'} name={'categoryID'} placeholder={'categoryID'}></input>
            <input onChange={(e) => setFile(e.target.value)} type={'file'} name={'images'} placeholder={'Upload image/images'}></input>
            <button type={'submit'}>Create</button>
        </form>
    )
}

export default AdminPage



// create new product
// edit product
// delete product