import "./Pages.css";
import {useState} from "react";
import FetchWrapper from "../components/FetchWrapper.js";

export default function DeleteFlower() {
    const [id, setId] = useState("");

    const API = new FetchWrapper('http://localhost:3001/api/flowers');

    function handleSubmit(e) {
        e.preventDefault();
        API.delete(`/${id}`).then(() => setId(""))
    }

    return (
        <>
        <div className="content">
            <form onSubmit={handleSubmit}>
                <label for="flowerId">flowerId</label>
                <input id="flowerId" required value={id} onChange={(e) => setId(e.target.value)}></input>
                <button type="submit">Delete</button>
            </form>
        </div>
        </>
    )
}