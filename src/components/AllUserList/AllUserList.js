import React, {Component} from 'react';
import {connect} from 'react-redux';

class AllUserList extends Component{

    componentDidMount(){
        this.props.dispatch({type: 'FETCH_ALL_USERS'});
    }

    render(){
        {this.props.allUsers.length > 0 && console.log('this.props.allUsers:', this.props.allUsers)};
        return(
            <div>all user list here</div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return{
        allUsers: reduxState.user.allUserReducer
    };
}

export default connect(mapStateToProps)(AllUserList)