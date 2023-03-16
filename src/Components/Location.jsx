
const Location = ({locationData}) => {
    return(
        <div className="location-card">
            <h3><span>Nombre: </span>{locationData.name}</h3>
            <h3><span>Tipo: </span>{locationData.type}</h3>
            <h3><span>Dimension: </span>{locationData.dimension}</h3>
            <h3><span>Población: </span>{locationData.residents?.length}</h3>
        </div>

    );
}

export default Location; 