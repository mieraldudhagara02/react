import React, { useEffect, useRef, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import axios from "axios";
import { useParams } from "react-router-dom";


function EditAddproduct() {


    const name = useRef("")
    const category = useRef("")
    const price = useRef("")
    const { id } = useParams("")

    useEffect(() => {
        axios.get(`http://localhost:5000/products/${id}`)
            .then((res) => {
                name.current.value = res.data.name
                category.current.value = res.data.category
                price.current.value = res.data.price

            })
    }, [])

    function UpdateProduct() {
        const Upd = {
            name: name.current.value,
            category: category.current.value,
            price: price.current.value

        }
        axios.put(`http://localhost:5000/products/${id}`, Upd)
            .then(() => {
                alert("Successfully updated Blog Menu")
                window.location = "/"
            })
    }





    return (
        <>
            <input ref={name} type="text" className="input-group-text w-100 m-2" placeholder="Edit Product here..." aria-label="Username" />

            <input ref={price} type="text" className="input-group-text w-100 m-2" placeholder="Edit Product here..." aria-label="Username" />

            <input ref={category} type="text" className="input-group-text w-100 m-2" placeholder="Edit Product here..." aria-label="Username" />

            <Button className="btn w-25 btn-primary m-2" onClick={UpdateProduct}>Save</Button>
           

        </>


    )


}

export default EditAddproduct;