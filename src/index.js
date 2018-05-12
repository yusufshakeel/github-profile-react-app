import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import registerServiceWorker from './registerServiceWorker';

import SearchUser from './components/search_user';
import UserDetail from "./components/user_detail";
import UserList from "./components/user_list";

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {users: [], selectedUser: null};

        // this.searchUser('yusuf');
    }

    searchUser(query) {

        const self = this;

        axios({
            url: 'https://api.github.com/search/users',
            method: 'get',
            params: {
                q: query,
                page: 1,
                per_page: 5
            }
        }).then(function (response) {
            if (response.data.total_count > 0) {
                self.setState({users: response.data.items});
                self.setState({selectedUser: response.data.items[0]})
            }
        });

    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-8 offset-sm-2 col-md-8 offset-md-2">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12">
                                <div className="text-center">
                                    <h3>GitHub Profile - React App</h3>
                                    <p>Created by <a href="https://github.com/yusufshakeel">Yusuf Shakeel</a></p>
                                </div>
                                <hr/>
                                <SearchUser onSearchChange={query => this.searchUser(query)}/>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-xs-12 col-sm-6 col-md-6">
                                <UserDetail user={this.state.selectedUser}/>
                            </div>
                            <div className="col-xs-12 col-sm-6 col-md-6">
                                <UserList
                                    onUserSelect={selectedUser => this.setState({selectedUser})}
                                    users={this.state.users}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
