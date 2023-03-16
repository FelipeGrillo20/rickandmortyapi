import axios from "axios";
import { useEffect, useState } from "react";

const ResidentInfo = ( {url} ) => {

    const [resident, setResident] = useState( {} )

    useEffect( () => {
        axios
        .get( url )
        .then(resp => setResident(resp.data))
        .catch(error => console.log(error))
      }, [])
    
    let arrayStatus = []  
    const bgStatus = () => {
        if(resident.status === "Alive"){
            arrayStatus.push('var(--vivo)', 'Vivo')
        }else if(resident.status === "Dead"){
            arrayStatus.push('var(--muerto)', 'Muerto')
        }else{
            arrayStatus.push('var(--desconocido)', 'Desconocido')
        }
        return arrayStatus
    }
    bgStatus()


    return(
        <section>
            <div className="data-status">
                <div className="status"  
                style={{backgroundColor: arrayStatus[0]}}>    
                </div>
                <p>{arrayStatus[1]}</p>
            </div>
            <div>
                <img src={resident.image} />
                <h3>{resident.name}</h3>
                <p><strong>Origen: </strong>{resident.origin?.name}</p>
                <p><strong>Episodios:</strong>{resident.episode?.length}</p>
            </div>
        </section>
 
    );
}

export default ResidentInfo; 