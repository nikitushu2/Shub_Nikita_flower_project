import { useLocation } from "react-router-dom";
import "./Pages.css";

export default function GetAll() {
    const location = useLocation();
    const data = location.state;

    return (
        <>
        <div className="content">
            <table>
                <thead>
                    <td>flowerId</td>
                    <td>name</td>
                    <td>unitPrice</td>
                    <td>stock</td>
                    <td>site</td>
                </thead>
                <tbody>
            {data.map(entry => (
                <>
                    <tr key={entry.flowerId}>
                        <td>{entry.flowerId}</td>
                        <td>{entry.name}</td>
                        <td>{entry.unitPrice}</td>
                        <td>{entry.stock}</td>
                        <td>{entry.site}</td>
                    </tr>
                </>
            ))}
                </tbody>
            </table>
        </div>
        </>
    )
}