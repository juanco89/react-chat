import React from "react";

function Mensaje(props: any) {

        const [mensaje, setMensaje] = React.useState('');

        const enviarMensaje = (evento: any) => {
            props.onMensajeEnviado(mensaje);
            evento.preventDefault();
        }

        return (
        <div >
            <form onSubmit={enviarMensaje}>
                <div>
                    <input value={mensaje} type="text" onChange={(e) => setMensaje(e.target.value)}>
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

export default Mensaje;