import {useEffect, useState} from "react";
import axios from "axios"

const Veiculos = () => {

    const [veiculos, setVeiculos] = useState([])

    const getVeiculos = () => {
        axios.get(`https://swapi.dev/api/vehicles`, {})
            .then ((res) => {
                setVeiculos(res.data.results)
            })
    }

    useEffect(() => {
       getVeiculos()
    }, [])
    return (
        <div>
            <h1 style={{fontFamily:"Roboto", fontWeight:600}}>Veiculos</h1><hr></hr>
                <div>
                    {veiculos.map((vehicles) => {
                        return (
                            <div style={{fontFamily:"Roboto", fontWeight:300}}>
                                <h1 style={{fontFamily:"Roboto", fontWeight:400}} className="card-text">{vehicles.name}</h1>
                                <p>População: {vehicles.population}</p>
                                <p>Clima: {vehicles.climate}</p>
                                <p>Gravidade: {vehicles.gravity}</p>
                                <p>Diametro: {vehicles.diameter}</p>
                                <p>Periodo Orbital: {vehicles.orbital_period}</p><hr></hr>
                            </div>
                        )
                    })}
                </div>
        </div>
    )
}

export default Veiculos;