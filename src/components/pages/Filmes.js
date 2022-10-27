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
                            <div style={{fontFamily:"Roboto", fontWeight:300}}>
                                <h1 style={{fontFamily:"Roboto", fontWeight:400}}>{film.title}</h1>
                                <p>Diretor: {film.director}</p>
                                <p>Episódio: {film.episode_id}</p>
                                <p>Data de lançamento: {film.release_date}</p>
                                <p>Produtor: {film.producer}</p>
                                <p>Texto de Abertura: {film.opening_crawl}</p><hr></hr>
                            </div>
                        )
                    })}
                </div>
        </div>
    )
}

export default Films
