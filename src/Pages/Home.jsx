
import axios from "axios";
import { useEffect, useState } from "react";
import {v4 as uuid} from "uuid";
import {saveData } from "../Utils/localStorage";

export default function Home() {

    const [data, setData] = useState([]);
    var [count, setCount] = useState(1);
    const getItems = () => {
        return axios.get("http://localhost:3000/products");
    }

    useEffect(() => {
        getItems()
            .then((res) => {
                setData(res.data)
            })
            .catch((err) => {

            })

    }, [])

    const handleCart = ({ count, price, id,name, description,image}) => {
        const payload = {
            id: uuid,
            count: count,
            price: price,
            finalPrice: count * price,
            name: name,
            image: image,
            description: description
        }
        // const config = {
        //     url: "http://localhost:3000/cartItems",
        //     method: "post",
        //     data: payload
        // }
        // return axios(config)
        saveData("cartItems",payload)
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
        <div style={{display: "flex", flexDirection: "column",alignItems: "center"}}>
            <h1>Home Page</h1>
            <h1>Product Cards</h1>
            <div>
                {
                    data.map((item) => {
                        return <div style={{
                            border: "2px solid red",
                            padding: 20,
                            marginTop: 20,
                            width: "600px",
                            display: "flex",
                            gap: "2rem"
                        }} key={item.id}>
                            <div>
                                <img style={{width: "100px"}} src={item.image} alt="" />
                            <h1>Product Name: {item.name}</h1>
                            <h1>Country Of Origin: {item.country_of_origin}</h1>
                            <h1>Product Name: {item.name}</h1>
                            <h1>Price: ₹ {item.price}</h1>
                            <p>Description: {item.description}</p>
                            </div>
                            <div style={{ display: "flex", gap: "5rem", flexDirection: "column" }}>
                                <div style={{ display: "flex", gap: ".5rem" }}>
                                    <button onClick={handleDelete}>-</button>
                                    <p style={{ border: "1px solid black", padding: 10, background: "black", color: "white" }}>{count}</p>
                                    <button onClick={handleAdd}>+</button>
                                </div>
                                <div>
                                    <button onClick={() => handleCart({ ...item, count })}>Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}