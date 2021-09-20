import React, { useState } from 'react'
const Panel = (props) => {


    const [data, setData] = useState({
        id_search: '268',
        id: '11',
        first_name: 'asas',
        last_name: 'asas',
        direction: 'asas',
        movil: '312855546',
        age: '5',
        date_birth: '2020-01-01',
    })


    const handleInputChange = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    }

    const handleButtonSearch = (event) => {
        props.onSearch(data.id_search);
    }

    const handleButtonInsert = (event) => {
        props.onInsert(data);
    }

    return (
        <div className="columns is-centered">
            <article className="panel is-primary column is-four-fifths">
                <p className="panel-heading">
                    SOFTCARIBBEAN
                </p>

                <a className="panel-block is-active">
                    <span className="panel-icon">
                        <i className="fas fa-book" aria-hidden="true"></i>
                    </span>
                    <label>Buscar:&nbsp;</label>
                    <input
                        className="input"
                        name="id_search"
                        type="text"
                        value={data.id_search}
                        placeholder="ingrese el Id del cliente"
                        onChange={handleInputChange}
                    />
                    <button className="button" onClick={handleButtonSearch}>Buscar</button>
                </a>
                <a className="panel-block">
                    <span className="panel-icon">
                        <i className="fas fa-book" aria-hidden="true"></i>

                    </span>
                    <label>Acción:&nbsp;</label>
                    <input value={data.id} className="input" name="id" onChange={handleInputChange} type="text" placeholder="Id del cliente"></input>
                    <input value={data.first_name} className="input" name="first_name" onChange={handleInputChange} type="text" placeholder="Nombres"></input>
                    <input value={data.last_name} className="input" name="last_name" onChange={handleInputChange} type="text" placeholder="Apellidos"></input>
                    <input value={data.direction} className="input" name="direction" onChange={handleInputChange} type="text" placeholder="Dirección"></input>
                    <input value={data.movil} className="input" name="movil" onChange={handleInputChange} type="text" placeholder="Teléfono"></input>
                    <input value={data.age} className="input" name="age" onChange={handleInputChange} type="text" placeholder="Edad"></input>
                    <input value={data.date_birth} className="input" name="date_birth" onChange={handleInputChange} type="text" placeholder="Nacimiento"></input>
                    <button className="button" onClick={handleButtonInsert}>Ingresar</button>
                </a>


            </article>
        </div>
    )
}
export default Panel