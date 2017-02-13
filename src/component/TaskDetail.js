import React from 'react';

export default class TaskDetail extends React.Component {

    render() {
        return <div><h1>Task Detail {this.props.task_id}</h1></div>;
    }
}
