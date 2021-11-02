import React from "react";
import "./ChatHistory.css";

type HistoryProps = {
  historial: string[];
};

export default class ChatHistory extends React.Component<HistoryProps> {
  render() {
    return (
      <div id="historial">
        <span>Historial de chat</span>
        <div>
          {this.props.historial.map((mensaje, index) => (
            <p key={index}>{mensaje}</p>
          ))}
        </div>
      </div>
    );
  }
}
