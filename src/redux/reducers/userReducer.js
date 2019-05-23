import {combineReducers} from 'redux';

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_USER':
      return action.payload;
    case 'UNSET_USER':
      return {};
    default:
      return state;
  }
};

const allUserReducer = (state = [], action) => {
  if(action.type === 'SET_ALL_USERS'){
    return action.payload;
  }
  return state;
}

// user will be on the redux state at:
// state.user
// export default userReducer;
export default combineReducers({
  userReducer,
  allUserReducer
})
