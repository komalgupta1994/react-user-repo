import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { userInfo } from '../actions/index';
import { Link } from 'react-router';
import UserRepo from './user_repo';

class UserInfo extends Component {
    componentWillMount() {
        this.props.userInfo(this.props.params.username);
    }
    render() {
        const userDetails = this.props.userDetail && this.props.userDetail.all;
        return (
            <div className="container">
                <div className = "row">
                    <div className="col-md-6">
                        <img style={{width: '100px'}} src={userDetails.avatar_url} />
                        <h2>{userDetails.name}</h2>
                        <h3>{userDetails.location}</h3>
                        <h4>{userDetails.blog}</h4>
                    </div>

                    <div className="col-md-6">
                        <UserRepo username={this.props.params.username}/>
                    </div>
                </div>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({userInfo}, dispatch);
}

function mapStateToProps({userInfo}) {
    return { userDetail: userInfo };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);