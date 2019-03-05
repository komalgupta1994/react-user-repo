import { combineReducers } from 'redux';
import UserListReducer from './user_list_reducer';
import UserInfoReducer from './user_info_reducer';
import UserRepoReducer from './user_repo_reducer';

const rootReducer = combineReducers({
  userList: UserListReducer,
  userInfo: UserInfoReducer,
  userRepo: UserRepoReducer
});

export default rootReducer;
