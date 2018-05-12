import React from 'react';
import UserListItem from './user_list_item';

const UserList = ({users, onUserSelect}) => {

    if (!users) {
        return (
            <div className="list-group">
                <p>Loading...</p>
            </div>
        );
    }

    const userList = users.map(function (user) {
        return (
            <UserListItem
                onUserSelect={onUserSelect}
                key={user.id}
                user={user}/>
        );
    });

    return (
        <div className="list-group">
            {userList}
        </div>
    );
};

export default UserList;