import { useLocation } from "react-router-dom";
import {useEffect, useState} from "react";
import FetchWrapper from "../components/FetchWrapper.js";
import "./Pages.css";

export default function GetFlower() {
    const location = useLocation();
    const [flower, setFlower] = useState({});
    const [id, setId] = useState("");

    const data = location.state;

    const API = new FetchWrapper('http://localhost:3001/api/flowers');

    useEffect(() => {
        API.get(`/${id}`).then(response => setFlower(response));
    }, [id])

    return (
        <>
        <div className="content">
        <label for="getFlowerId">flowerId</label>
        <input id="getFlowerId" value={id} onChange={(e) => setId(e.target.value)}></input>
        </div>
        {id && (
            <div className="content">
            <p>flowerId: {flower.flowerId}<br/>
               name: {flower.name}<br />
               unitPrice: {flower.unitPrice}<br />
               stock: {flower.stock}<br />
               site: {flower.site}</p>
        </div>
        )}
        </>
    )
}