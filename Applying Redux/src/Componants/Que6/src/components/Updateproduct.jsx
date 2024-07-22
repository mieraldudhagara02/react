import axios from "axios";
import React from "react"
import { useRef } from "react";
import { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";


function Updateproduct() {

    const price = useRef("")
    const productname = useRef("")
    const { id } = useParams("")

    useEffect(() => {
        axios.get(`http://localhost:5000/cart/${id}`)
            .then((res) => {
                productname.current.value = res.data.productname
                price.current.value = res.data.price
            })
    }, [])

    function Updproduct() {
        var Upd = {
            productname:productname.current.value,
            price: price.current.value
        }
        axios.put(`http://localhost:5000/cart/${id}`, Upd)
            .then(() => {
                alert("Successfully updated")
                window.location = "/cart"
            })

    }


    return (
        <>
        <input type="text" ref={productname} placeholder="Update name " /> <br/>
            <input type="number" ref={price} placeholder="Update Price of Food" /> <br/>
            <Button onClick={Updproduct}>Save</Button>
        </>
         
    )

}

export default Updateproduct;