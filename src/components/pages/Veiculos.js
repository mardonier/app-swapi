import {useEffect, useState} from "react";
import axios from "axios";

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
            <h1 style={{fontFamily:"Roboto", fontWeight:600}}>Veículos</h1><hr></hr>
                <div>
                    {veiculos.map((vehicles) => {
                        return (
                            <div style={{fontFamily:"Roboto", fontWeight:300}}>
                                <h1 style={{fontFamily:"Roboto", fontWeight:400}}>{vehicles.name}</h1>
                                <p>Capacidade de carga: {vehicles.cargo_capacity}</p>
                                <p>Passageiros: {vehicles.passengers}</p>
                                <p>Fabricante: {vehicles.manufacturer}</p>
                                <p>Velocidade máxima na atmosfera: {vehicles.max_atmosphering_speed}</p>
                                <p>Comprimento: {vehicles.length}</p>
                                <p>Equipe técnica: {vehicles.crew}</p><hr></hr>
                            </div>
                        )
                    })}
                </div>
        </div>
    )
}

export default Veiculos;
