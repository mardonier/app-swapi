import {useEffect, useState} from "react";
import axios from "axios"

const Personagens = () => {

    const [people, setPeople] = useState([])

    const getPeople = () => {
        axios.get(`https://swapi.dev/api/people`, {})
            .then ((res) => {
                setPeople(res.data.results)
            })
    }

    useEffect(() => {
       getPeople()
    }, [])
    return (
        <div>
            <h1 style={{fontFamily:"Roboto", fontWeight:600}}>Personagens</h1><hr></hr>
                <div>
                    {people.map((people) => {
                        return (
                            <div style={{fontFamily:"Roboto", fontWeight:300}}>
                                <h1 style={{fontFamily:"Roboto", fontWeight:400}}>{people.name}</h1>
                                <p>Altura: {people.height}</p>
                                <p>Cor da pele: {people.skin_color}</p>
                                <p>Peso: {people.mass}</p>
                                <p>Gênero: {people.gender}</p><hr></hr>
                                
                            </div>
                        )
                    })}
                </div>
        </div>
    )
}

export default Personagens;
