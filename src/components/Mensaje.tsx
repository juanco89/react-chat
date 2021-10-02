import React from "react";

export default class Mensaje extends React.Component {
    render() {
        const enviarMensaje = (mensaje: any) => {
            console.log('Tipo Mensaje -> ',typeof(mensaje))
            alert(mensaje);
            mensaje.preventDefault()
        }
        return (
        <div>
            <form onSubmit={enviarMensaje}>
                <div>
                    <input type="text">
                    </input>
                </div>
                <div>
                    <button type="submit">
                        Enviar
                    </button>
                </div>
            </form>
        </div>
        );
    }
}