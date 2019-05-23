import React, {Component} from 'react';
import {connect} from 'react-redux';

class AllUserList extends Component{

    componentDidMount(){
        this.props.dispatch({type: 'FETCH_ALL_USERS'});
    }

    render(){
        {this.props.allUsers.length > 0 && console.log('this.props.allUsers:', this.props.allUsers)};
        return(
            <div>
                <h2>All user accounts</h2>
                <ul>
                    {this.props.allUsers.map((user) => {
                        return <li key={user.id}>{user.username}</li>;
                })}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return{
        allUsers: reduxState.user.allUserReducer
    };
}

export default connect(mapStateToProps)(AllUserList)