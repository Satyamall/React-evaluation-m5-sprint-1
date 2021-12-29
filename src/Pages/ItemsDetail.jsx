import axios from "axios"
import {useEffect, useState } from "react"

export default function ItemsDetails() {

    const getItems = () => {
        return axios.get("http://localhost:3000/cartItems")
    }

    const [data, SetData] = useState([]);

    useEffect(() => {
        getItems()
            .then((res) => {
                SetData(res.data)
            })
           .catch((err)=>{
               console.log(err);
           })
    }, [])

    return (
        <div style={{display: "flex",flexDirection:"column",alignItems: "center"}}>
            <h1>Order Items Page</h1>
           {
               data.map((item)=>{
                   return (
                    <div style={{ 
                        display: "flex", 
                        gap: "1rem", 
                        border: "2px solid red", 
                        padding: 20, 
                        borderRadius: "20px",
                        width: "550px"
                    }}>
                        <div>
                            <h1>Order-id: {item.id}</h1>
                            <h1>order-data: {Date.now}</h1>
                        </div>
                        <div>
                            <p>Product name: {item.name}</p>
                            <p>Description: {item.description}</p>
                            <p>Price: ₹ {item.price}</p>
                        </div>
                    </div>
                   )
               })
           }
        </div>
    )
}