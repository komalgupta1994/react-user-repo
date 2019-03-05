import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';


class UserList extends Component {
    renderUser(userData) {
        const name = userData.login;
        const avatar_url = userData.avatar_url;

        return (
            <tr key={name}>
                <td>
                <img style={{width: '100px'}} src={avatar_url} />
                    
                </td>
                <td>
                   <Link to={"/user/" + name}>
                       {name}
                    </Link>
                </td>
            </tr>
        )
    }
    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Avartar URL</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props && this.props.userList && this.props.userList.all && this.props.userList.all.items
                     && this.props.userList.all.items.map(this.renderUser)}
                </tbody>
            </table>
        )
    }
}

function mapStateToProps({userList}) {
    return { userList };
}

export default connect(mapStateToProps)(UserList);