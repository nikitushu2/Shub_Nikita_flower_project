import "./Pages.css";
import {useState} from "react";
import FetchWrapper from "../components/FetchWrapper.js";

export default function AddFlower() {
    const [flower, setFlower] = useState({
        flowerId: "",
        name: "",
        unitPrice: "",
        stock: "",
        site: ""
    })

    const API = new FetchWrapper('http://localhost:3001/api/flowers');

    function handleSubmit(e) {
        e.preventDefault();
        API.post("/", flower).then((data) => {
            console.log(data);
            setFlower({
                flowerId: "",
                name: "",
                unitPrice: "",
                stock: "",
                site: ""
            })
        })
    }

    return (
        <>
        <div className="content">
            <form onSubmit={handleSubmit}>
                <label for="flowerId">flowerId</label>
                <input id="flowerId" value={flower.flowerId} required onChange={(e) => setFlower({...flower, flowerId: Number(e.target.value)})}></input>

                <label for="name">name</label>
                <input id="name" value={flower.name} required onChange={(e) => setFlower({...flower, name: e.target.value})}></input>

                <label for="unitPrice">unitPrice</label>
                <input id="unitPrice" value={flower.unitPrice} required onChange={(e) => setFlower({...flower, unitPrice: Number(e.target.value)})}></input>

                <label for="stock">stock</label>
                <input id="stock" value={flower.stock} required onChange={(e) => setFlower({...flower, stock: Number(e.target.value)})}></input>

                <label for="site">site</label>
                <input id="site" value={flower.site} required onChange={(e) => setFlower({...flower, site: e.target.value})}></input>

                <button type="submit">Submit</button>
            </form>
        </div>
        </>
    )
}