import React from 'react';

export default class TaskDetail extends React.Component {

    render() {
        return (
            <div>
                <h1>Task Detail</h1>
                <h4>Task Id {this.props.params.id}</h4>
            </div>
        );
    }
}
