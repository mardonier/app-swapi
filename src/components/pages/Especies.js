import {useEffect, useState} from "react";
import axios from "axios"

const Especies = () => {

    const [especies, setEspecies] = useState([])

    const getEspecies = () => {
        axios.get(`https://swapi.dev/api/species`, {})
            .then ((res) => {
                setEspecies(res.data.results)
            })
    }

    useEffect(() => {
       getEspecies()
    }, [])
    return (
        <div>
            <h1 style={{fontFamily:"Roboto", fontWeight:600}}>Especies</h1><hr></hr>
                <div>
                    {especies.map((species) => {
                        return (
                            <div style={{fontFamily:"Roboto", fontWeight:300}}>
                                <h1 style={{fontFamily:"Roboto", fontWeight:400}}>{species.name}</h1>
                                <p>Altura média: {species.average_height}</p>
                                <p>Vida média: {species.average_lifespan}</p>
                                <p>Cor dos olhos: {species.eye_colors}</p>
                                <p>Cor dos cabelos: {species.hair_colors}</p><hr></hr>
                                
                            </div>
                        )
                    })}
                </div>
        </div>
    )
}

export default Especies;
