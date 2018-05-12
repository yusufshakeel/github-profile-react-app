import React from 'react';

const UserDetail = ({user}) => {

    if (!user) {
        return (
            <div></div>
        )
    }

    return (
        <div className="card">
            <img
                className="card-img-top"
                src={user.avatar_url}
                alt="user profile image"/>
            <div className="card-body">
                <h5 className="card-title text-center">
                    <a href={user.html_url}>{user.login}
                    </a>
                </h5>
            </div>
        </div>
    );
};

export default UserDetail;