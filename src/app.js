import React, { Component } from 'react';
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router';
import Instagram from './component/Instagram';
import TwitterFeed from './component/Twitter';
import TaskDetail from './component/TaskDetail';
import Container from './component/Container';

const Home = () => (
    <div><h1>Welcome to <Link to='/task'>Task Manager</Link>!</h1></div>
);
const Task = (props) => {
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
    return (
    <div>
        <h1>Task Manager</h1>
        <table>
        <tr>
            <th>No</th>
            <th>Task Name</th>
            <th>Assignee</th>
        </tr>
        {listTask}
        </table>
        { props.params.id && <TaskDetail task_id={props.params.id} /> }
    </div>);
};

const About = (props) => {
    return (
    <div>
        <h1>About</h1>
        <Link to='/about'>Instagram Feed</Link>
        <br />
        <Link to='/about/twitter'>Twitter Feed</Link>
        {props.children}
    </div>);
};

const NotFound = () => (<h1>404.. This page is not found!</h1>);

class App extends Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path='/' component={Container}>
                    <IndexRoute component={Home} />
                    <Route path='/task(/:id)' component={Task} />
                    <Route path='/about' component={About}>
                        <IndexRoute component={Instagram} />
                        <Route path='twitter' component={TwitterFeed} />
                    </Route>
                    <Route path='*' component={NotFound} />
                </Route>
              </Router>
    );
  }
}

export default App;
