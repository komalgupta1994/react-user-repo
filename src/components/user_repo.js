import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { userRepo } from '../actions/index';


class UserRepo extends Component {
    componentWillMount() {
        this.props.userRepo(this.props.username);
    }

    renderRepo(repoData) {
        const name = repoData.name;
        const description = repoData.description;

        return (
            <li className="col-12 d-flex width-full py-4 border-bottom public source">
                <div className="col-9 d-inline-block">
                    <div className="d-inline-block mb-1">
                        <h3>
                            <a href='#'> {name} </a>
                        </h3>
                    </div>
                    <div>
                        <p className="col-9 d-inline-block text-gray mb-2 pr-4">
                            {description}
                        </p>
                    </div>
                </div>
            </li>
        )
    }
    render() {
        return (
            <div className="container">
            <div className="row">
            <ul>
                    {this.props && this.props.userRepoDetail && this.props.userRepoDetail.all && this.props.userRepoDetail.all.length
                     && this.props.userRepoDetail.all.map(this.renderRepo)}
                </ul>
                </div>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({userRepo}, dispatch);
}

function mapStateToProps({userRepo}) {
    return { userRepoDetail: userRepo };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserRepo);