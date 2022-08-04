import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import {useForm} from "react-hook-form";

const AddState = () => {
    const [name, setName] = useState('');
    const [population, setPopulation] = useState('');
    const [gdp, setGDP] = useState('');
    const [area, setArea] = useState('');
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors }} = useForm({ mode: 'onBlur' });

    const saveState = async () => {
        await axios.post('http://localhost:5000/midwest-states', {
            name: name,
            population: population,
            gdp: gdp,
            area: area,
        });
        navigate('/');
    }
    return (
        <main>
            <form onSubmit={handleSubmit(saveState)} className={"col-md-6 mx-auto"}>
                <h1 className={"text-center"}>Add State</h1>
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
                <label htmlFor={"areaQ"}>Area</label>
                <input type={"text"} className={"form-control "} id={'areaQ'} name={"areaQ"} {...register('areaQ', {required: true})} placeholder={"area"} value={area} onChange={(e) => setArea(e.target.value)}/>
                {errors.area?.type === 'required' && <small>The States area is required</small>}
                <div className="text-center">
                    <button className={"btn btn-secondary me-2"}>Add State</button>
                    <Link to={"/"} className={"btn btn-secondary"}>Cancel</Link>
                </div>
            </form>
        </main>
    )
}

export default AddState;