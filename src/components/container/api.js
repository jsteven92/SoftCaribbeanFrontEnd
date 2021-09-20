import React, { Component } from 'react'
import Panel from '../panel.js'
import PanelResult from '../panelResult'

const URL_APPLICATION = "http://localhost:8080/treeBPlus";

export class api extends Component {
    state = { answer: [], message: '' }

    _changeState = (answer) => {
        this.setState(answer);
    }

    _handleSearch = (id) => {
        this.setState({ answer: [], message: "Dato no encontrado" });
        fetch(URL_APPLICATION + "/" + id, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Access-Control-Allow-Origin': URL_APPLICATION,
                'Access-Control-Allow-Credentials': 'true'
            },
            method: 'GET'
        })
            .then(res => res.json())
            .then(results => {
                //console.log(results);
                this.setState({ answer: results })
            })
    }

    _handleInsert = (data) => {

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        this.setState({ answer: [] });
        var raw = JSON.stringify({
            "id": data.id,
            "firstName": data.first_name,
            "lastName": data.last_name,
            "direction": data.direction,
            "age": data.age,
            "movil": data.movil,
            "dateBirth": data.date_birth
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch(URL_APPLICATION, requestOptions)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    return [];
                }
            })
            .then(results => {
                var message = "";
                if(results.length == 0){
                    message = "Error de validación";
                }
                this.setState({ answer: results,message: message })
            })
            .catch(error => console.log('error', error));
    }

    render() {
        return <div>
            <Panel
                onSearch={this._handleSearch}
                onInsert={this._handleInsert}
            />
            <PanelResult
                answer={this.state.answer}
                message={this.state.message} />
        </div>
    }
}
export default api