import React from "react";
import "./Contenedor.css"
import ChatHistory from "./ChatHistory";
import Mensaje from "./Mensaje";

export default class Contenedor extends React.Component {

    enviarMensaje(evento: string) {
        console.log('ando en el contenedor', evento)
    }

    render() {
        return (
            <div id="contenedor">
            <ChatHistory/>
            <Mensaje onMensajeEnviado={this.enviarMensaje}/>
            </div>
        );
    }

}