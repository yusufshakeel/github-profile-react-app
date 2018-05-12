import React from 'react';

const UserListItem = ({user, onUserSelect}) => {

    return (
        <li
            onClick={() => onUserSelect(user)}
            className="list-group-item list-group-item-action">
            <div className="media">
                <img
                    className="mr-3 media-profile-img"
                    src={user.avatar_url}
                    alt={user.login}/>
                <div className="media-body">
                    <h5 className="mt-0">{user.login}</h5>
                </div>
            </div>
        </li>
    );

};

export default UserListItem;