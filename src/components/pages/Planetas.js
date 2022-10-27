import {useEffect, useState} from "react";
import axios from "axios"

const Planets = () => {

    const [planets, setPlanets] = useState([])

    const getPlanets = () => {
        axios.get(`https://swapi.dev/api/planets`, {})
            .then ((res) => {
                setPlanets(res.data.results)
            })
    }

    useEffect(() => {
       getPlanets()
    }, [])
    return (
        <div>
            <h1 style={{fontFamily:"Roboto", fontWeight:600}}>Planetas</h1><hr></hr>
                <div>
                    {planets.map((planet) => {
                        return (
                            <div style={{fontFamily:"Roboto", fontWeight:300}} className="card-body card my-1 col-12 col-lg-6 d-inline-block ">
                                <h1 style={{fontFamily:"Roboto", fontWeight:400}} className="card-text">{planet.name}</h1>
                                <p className="card-text">População: {planet.population}</p>
                                <p className="card-text">Clima: {planet.climate}</p>
                                <p className="card-text">Gravidade: {planet.gravity}</p>
                                <p className="card-text">Diametro: {planet.diameter}</p>
                                <p className="card-text">Periodo Orbital: {planet.orbital_period}</p><hr></hr>
                            </div>
                        )
                    })}
                </div>
        </div>
    )
}

export default Planets;