

const Paginado = ({page, setPage, quantypaginado}) => {
    return(
        <div className='siguiente'>
            { page >1 && <button className='atras' onClick={() => setPage(page - 1)}>Anteriores</button>}
            <p className='page'>{page} de {quantypaginado}</p>
            { quantypaginado > page && <button className='next' onClick={() => setPage(page + 1)}>Siguientes</button>}
        </div>
    );
}

export default Paginado; 