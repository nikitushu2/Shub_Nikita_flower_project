import "./Header.css";
import {Link, Outlet, useNavigate} from "react-router-dom";
import FetchWrapper from "./FetchWrapper.js";

export default function Header() {
    const navigate = useNavigate();

    const API = new FetchWrapper('http://localhost:3001/api/flowers');

    function getAll() {
        API.get('/').then(data => navigate('get-all', { state: data }));
    }

    function getFlower() {
        API.get('/').then(data => navigate('get-flower', { state: data }));
    }

    return (
        <>
        <div className="buttons-menu">
            <button onClick={getAll}>Get all</button>
            <button onClick={getFlower}>Get flower</button>
            <button><Link to="add-flower" style={{textDecoration: 'none', color: 'inherit'}}>Insert flower</Link></button>
            <button><Link to="delete-flower" style={{textDecoration: 'none', color: 'inherit'}}>Delete flower</Link></button>
        </div>
        <Outlet />
        </>
    )
}