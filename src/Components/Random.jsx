import axios from "axios";
import { useEffect, useState } from "react";
import ResidentInfo from "./ResidentInfo";
import Location from "./Location";
import Paginado from "./Paginado";



const Random = () => {

    const [location, setLocation] = useState({})

    useEffect( () => {
        let idLocation = Math.floor(Math.random() *126 ) +1
        axios
        .get(`https://rickandmortyapi.com/api/location/${idLocation}`)
        .then(resp => setLocation(resp.data))
        .catch(error => console.log(error))
      }, [])

      console.log(location.residents)
      //sesion buscar


      const [search, setSearch] = useState("")

    const searchId = () => {
        if(search <= 126){
        axios
        .get(`https://rickandmortyapi.com/api/location/${search}`)
        .then(resp => setLocation(resp.data))
        .catch(error => console.log(error))
        setSearch("")
        }
    }  

    const [page, setPage] = useState(1)
    const paginado = 6
    const quantypaginado = Math.ceil(location.residents?.length / paginado)
    const index = (page - 1) * paginado
    const residents = location.residents?.slice(index + index + paginado)
 

    return(
        <div className="buscador">
            <input 
            onChange={(e) => setSearch(e.target.value)}
            type="number"
            min={1}
            max={126}
            value={search}
            placeholder="Ingrese un id del 1 al 126"
            />
            <button onClick={searchId}>Search</button>
            <Location locationData={location}/>
            <Paginado
            page={page} 
            setPage={setPage}
            quantypaginado={quantypaginado}
            />
            <div className="container">
            {
                residents?.map((rickmorty) => (
                    <ResidentInfo url={rickmorty} key={rickmorty}/>
                ))
            }
            </div>

        </div>
  

    );


}

export default Random; 