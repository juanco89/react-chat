import React from "react";
import "./Contenedor.css"
import ChatHistory from "./ChatHistory";
import Mensaje from "./Mensaje";

export default class Contenedor extends React.Component {

    render() {
        return (
            <div id="contenedor">
            <ChatHistory/>
            <Mensaje/>
            </div>
        );
    }

}