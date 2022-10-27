import {useEffect, useState} from "react";
import axios from "axios"

const Films = () => {

    const [films, setFilms] = useState([])

    const getFilms = () => {
        axios.get(`https://swapi.dev/api/films`, {})
            .then ((res) => {
                setFilms(res.data.results)
            })
    }

    useEffect(() => {
       getFilms()
    }, [])
    return (
        <div>
            <h1 style={{fontFamily:"Roboto", fontWeight:600}}>Filmes</h1>
                <div>
                    {films.map((film) => {
                        return (
                            <div style={{fontFamily:"Roboto", fontWeight:300}} className="card-body card my-1 col-12 col-lg-6 d-inline-block ">
                                <h1 style={{fontFamily:"Roboto", fontWeight:400}} className="card-text">{film.title}</h1>
                                <p className="card-text">Diretor: {film.director}</p>
                                <p className="card-text">Episódio: {film.episode_id}</p>
                                <p className="card-text">Texto de Abertura: {film.opening_crawl}</p><hr></hr>
                            </div>
                        )
                    })}
                </div>
        </div>
    )
}

export default Films
