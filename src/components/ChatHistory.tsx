import React from 'react';
import './ChatHistory.css'

type HistoryProps = {
    historial: string[]
};

type HistoryState = {
    historial: string[]
};

export default class ChatHistory extends React.Component<HistoryProps, HistoryState> {

    state = {
        historial: []
    };

    constructor(props: HistoryProps) {
        super(props);

        console.log('los los', props.historial);

        this.setState({
            historial: props.historial
        });
    }

    render() {
        return (
            <div id="historial">
                <span>Historial de chat</span>
                <div>
                    {
                    this.state.historial.map((mensaje) => <p>{mensaje}</p>)
                    }
                </div>
            </div>
        );
    }
}
