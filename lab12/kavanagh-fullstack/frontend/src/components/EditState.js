import { useEffect, useState } from "react";
import axios from "axios";
import {Link, useNavigate, useParams} from "react-router-dom";
import {useForm} from "react-hook-form";

const EditState = () => {
    const [name, setName] = useState('');
    const [population, setPopulation] = useState('');
    const [gdp, setGDP] = useState('');
    const [area, setArea] = useState('');
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors }} = useForm({ mode: 'onBlur' });
    const {id} = useParams();

    const updateState = async () => {
        await axios.patch(`http://localhost:5000/midwest-states/${id}`, {
            Name: name,
            Population: population,
            GDP: gdp,
            Area: 100,
        });
        navigate("/");
    }
    const getStateByID = async () => {
        const response = await axios.get(`http://localhost:5000/midwest-states/${id}`);
        setName(response.data.Name);
        setPopulation(response.data.Population);
        setGDP(response.data.GDP);
        setArea(response.data.Area);
    }
    useEffect(() => {
        getStateByID().then(m => console.log("State successfully retrived"));
        /* eslint-disable-next-line react-hooks/exhaustive-deps */
    }, []);
    return (
        <main>
            <form onSubmit={handleSubmit(updateState)} className={"col-md-6 mx-auto"}>
                <h1 className={"text-center"}>Edit State</h1>
                <hr/>
                {/* name */}
                <label htmlFor={"name"}>Name</label>
                <input type={"text"} className={"form-control "} id={'name'} name={"name"} {...register('name', {required: true})} placeholder={"name"} value={name} onChange={(e) => setName(e.target.value)} autoFocus/>
                {errors.name?.type === 'required' && <small>The States name is required</small>}
                {/* population */}
                <label htmlFor={"population"}>Population</label>
                <input type={"text"} className={"form-control "} id={'population'} name={"population"} {...register('population', {required: true})} placeholder={"population"} value={population} onChange={(e) => setPopulation(e.target.value)}/>
                {errors.population?.type === 'required' && <small>The States population is required</small>}
                {/* gdp */}
                <label htmlFor={"gdp"}>GDP</label>
                <input type={"text"} className={"form-control "} id={'gdp'} name={"gdp"} {...register('gdp', {required: true})} placeholder={"gdp"} value={gdp} onChange={(e) => setGDP(e.target.value)}/>
                {errors.gdp?.type === 'required' && <small>The States gdp is required</small>}
                {/* area */}
                <label htmlFor={"area"}>Area</label>
                <input type={"text"} className={"form-control "} id={'area'} name={"area"} {...register('area', {required: true})} placeholder={"area"} value={area} onChange={(e) => setArea(e.target.value)}/>
                {errors.area?.type === 'required' && <small>The States area is required</small>}
                <div className={"text-center"}>
                    <button className={"btn btn-secondary me-2"}>Update State</button>
                    <Link to={'/'} className={"btn btn-secondary"}>Cancel</Link>
                </div>
            </form>
    
        </main>
    )
}

export default EditState