import {useEffect, useState} from "react";
import axios from "axios";

const Naves = () => {

    const [naves, setNaves] = useState([])

    const getNaves = () => {
        axios.get(`https://swapi.dev/api/starships`, {})
            .then ((res) => {
                setNaves(res.data.results)
            })
    }

    useEffect(() => {
       getNaves()
    }, [])
    return (
        <div>
            <h1 style={{fontFamily:"Roboto", fontWeight:600}}>Naves Espaciais</h1><hr></hr>
                <div>
                    {naves.map((starships) => {
                        return (
                            <div style={{fontFamily:"Roboto", fontWeight:300}}>
                            <h1 style={{fontFamily:"Roboto", fontWeight:400}}>{starships.name}</h1>
                            <p>Modelo: {starships.model}</p>
                            <p>Fabricante: {starships.manufacturer}</p>
                            <p>Passageiros: {starships.passengers}</p>
                            <p>Consumíveis: {starships.consumables}</p>
                            <p>Velocidade Máxima: {starships.max_atmosphering_speed}</p><hr></hr>
                        </div>                        )
                    })}
                </div>
        </div>
    )
}

export default Naves;
