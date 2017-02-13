import React from 'react';
import { Link } from 'react-router';
import { TaskDetail } from './TaskDetail.js';

const data =
    [
        {
            no: 1,
            task_name: 'react task 1',
            assignee: 'tuongle1'
        },
        {
            no: 2,
            task_name: 'react task 2',
            assignee: 'tuongle2'
        },
        {
            no: 3,
            task_name: 'react task 3',
            assignee: 'tuongle3'
        },
        {
            no: 4,
            task_name: 'react task 4',
            assignee: 'tuongle4'
        }
    ];
const listTask = data.map(item => (
<tr key={item.no}>
    <td><Link to={'task/' + item.no}>{item.no}</Link></td>
    <td>{item.task_name}</td>
    <td>{item.assignee}</td>
</tr>));
export default class ListTask extends React.Component {
    render() {
        return (<div>
        <h1>Task Manager</h1>
        <table>
        <tr>
            <th>No</th>
            <th>Task Name</th>
            <th>Assignee</th>
        </tr>
        {listTask}
        </table>
        { this.props.params.id && <TaskDetail task_id={this.props.params.id} /> }
    </div>);
    }
}