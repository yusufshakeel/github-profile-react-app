import React, {Component} from 'react';

class SearchUser extends Component {

    constructor(props) {
        super(props);

        this.formSubmit = this.formSubmit.bind(this);
    }

    render() {
        return (
            <form onSubmit={this.formSubmit}>
                <div className="input-group input-group-lg mb-3">
                    <input
                        type="text"
                        id="search-user"
                        className="form-control"
                        placeholder="Search user"
                        maxLength="50"/>

                    <div className="input-group-append">
                        <button
                            className="btn btn-outline-secondary"
                            type="submit"><i className="fa fa-search"></i>
                        </button>
                    </div>
                </div>
            </form>
        );
    }

    formSubmit(event) {
        const searchQuery = document.getElementById('search-user').value;
        if (searchQuery.length > 0) {
            this.props.onSearchChange(searchQuery);
        }
        event.preventDefault();
    }
}

export default SearchUser;