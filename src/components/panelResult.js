import React from 'react'

export default function panelResult(props) {
    return (
        <div className="columns is-centered">
            <article className="panel is-danger column is-four-fifths">
                <p className="panel-heading">
                    Resultado
                </p>

                <a className="panel-block is-active">
                    <ul>
                      {props.answer.length == 0 
                      ? <p> {props.message}</p>
                      : props.answer.map((client) => {
                          return (
                              <div key={client}>
                                  <li>Id: {client.id}</li>
                                  <li>Nombres: {client.firstName}</li>
                                  <li>Apellidos: {client.lastName}</li>
                                  <li>dirección: {client.direction}</li>
                                  <li>Teléfono: {client.movil}</li>
                                  <li>Edad: {client.edad}</li>
                                  <li>Cumpleaños: {client.dateBirth}</li>
                              </div>
                          )
                      })
                    }
                    </ul>
                </a>


            </article>
        </div>
    )
}
