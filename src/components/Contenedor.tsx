import React from "react";
import "./Contenedor.css"
import ChatHistory from "./ChatHistory";
import Mensaje from "./Mensaje";

type HistoryState = {
    historial: string[]
};

export default class Contenedor extends React.Component<{}, HistoryState> {

    mensajes: string[] = [];

    constructor(props: any) {
        super(props);
        
        this.state = { historial: [] };
        
        this.actualizarEstado = this.actualizarEstado.bind(this);
    }
    
    enviarMensaje(mensaje: string) {
        this.mensajes.push(mensaje);
        this.actualizarEstado();
    }

    actualizarEstado() {
        this.setState( { historial: this.mensajes } );
    }

    render() {
        return (
            <div id="contenedor">
            <ChatHistory historial={this.state.historial} />
            <Mensaje onMensajeEnviado={(e: string) => this.enviarMensaje(e) }/>
            </div>
        );
    }
}