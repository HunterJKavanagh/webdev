import {useState, useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

const StateList = () => {
    const [states, setStates] = useState([]);
    const getStates = async () => {
        const response = await axios.get('http://localhost:5000/midwest-states');
        setStates(response.data);
    }
    const deleteState = async (id) => {
        await axios.delete(`http://localhost:5000/midwest-states/${id}`);
        await getStates();
    }
    useEffect(() => {
        getStates().then(m => console.log("Successfully retrieved the State"));
    }, []);
    return (
        <main>
            <table className={"table table-hover table-striped"} aria-label={"States table"}>
                <caption><h1>State List</h1></caption>
                <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Population</th>
                    <th scope="col">GDP</th>
                    <th scope="col">Area</th>
                    <th scope="col">Upadte</th>
                    <th scope="col">Delete</th>
                </tr>
                </thead>
                <tbody>
                    {states.map((state) => (
                        <tr>
                            <td>{state.Name}</td>
                            <td>{state.Population}</td>
                            <td>{state.GDP}</td>
                            <td>{state.Area}</td>
                            <td>
                                <Link to={`/edit/${state.id}`} className={"btn btn-secondary"} aria-label={`edit ${state.Name}`}>Edit</Link>
                            </td>
                            <td>
                                <button onClick={() => deleteState(state.id)} className={"btn btn-secondary"} aria-label={`Delete ${state.Name}`}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className={"text-center"}>
                <Link to={'/add'} className={"btn btn-secondary"}>AddState</Link>
            </div>
        </main>
    )
}

export default StateList;