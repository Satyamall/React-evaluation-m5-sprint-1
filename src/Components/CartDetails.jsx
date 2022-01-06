import axios from "axios"
import {useEffect, useState } from "react";
import {Link } from "react-router-dom";
import { loadData } from "../Utils/localStorage";

export default function ItemsDetails() {

    // const getItems = () => {
    //     return axios.get("http://localhost:3000/cartItems")
    // }

    const cartItems=loadData("cartItems")
    const [data, SetData] = useState([]);
    var [count, setCount] = useState(1);

    useEffect(() => {
        getItems()
            .then((res) => {
                SetData(res.data)
            })
            .catch((err)=>{
                console.log(err)
            })
    }, [])
//    console.log(item);

   const postData=(id)=>{
       const config={
           url: `http://localhost:3000/cartItems/${id}`,
           method: "delete"
       }
       return axios(config)
   }

   const handleAdd = () => {
    setCount(count + 1);
}

const handleDelete = () => {
    if (count > 1) {
        setCount(count - 1);
    }
}

    return (
        <div style={{display: "flex",flexDirection:"column",alignItems: "center"}}>
            <h1>Cart Item Details Page</h1>
            {
                cartItems.map((item)=>{
                    return <div style={{ 
                        display: "flex", 
                        gap: "1rem", 
                        border: "2px solid red", 
                        padding: 20, 
                        borderRadius: "20px",
                        width: "800px"
                    }} key={item.id}>
                        <div>
                            <img style={{width: "100px"}} src={item.image} alt="" />
                        </div>
                        <div>
                            <p>Product name: {item.name}</p>
                            <p>Country Of Origin: {item.country_of_origin}</p>
                            <p>Description: {item.description}</p>
                            <p>Price: ₹ {item.price}</p>
                        </div>
                        <div>
                        <h1>Total Item : {item.count+Number(count)-1}</h1>
                        <h1>Total Price Of This Product: {item.finalPrice*count}</h1>
                        <button onClick={postData(item.id)}>Remove Item</button>
                        <Link to={`orders/${item.id}`}>Buy Item</Link>
                        </div>
                        <div style={{ display: "flex", gap: "5rem", flexDirection: "column" }}>
                                <div style={{ display: "flex", gap: ".5rem" }}>
                                    <button onClick={handleDelete}>-</button>
                                    <p style={{ border: "1px solid black", padding: 10, background: "black", color: "white" }}>{count}</p>
                                    <button onClick={handleAdd}>+</button>
                                </div>
                        </div>
                    </div>
                })
            }
        </div>
    )
}