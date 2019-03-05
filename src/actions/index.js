import axios from 'axios';

const API_KEY = '2f76e4bc3ae2cac05cb2bd0f41207556';
// const SEARCH_URL = 'https://api.github.com/search/users?q='
// const USER_INFO_URL = 'https://api.github.com/users/';

const SEARCH_URL = 'http://localhost:3001/user.json';
const USER_INFO_URL = 'http://localhost:3001/singleUser.json';
const USER_REPO_URL = 'http://localhost:3001/repo.json';


export const SEARCH_USER = 'SEARCH_USER';
export const USER_INFO = 'USER_INFO';
export const USER_REPO = 'USER_REPO';

export function searchUser(name) {
   const url = `${SEARCH_URL}${name}+repos:%3E42+followers:%3E1000`;
   // const request = axios.get(url);
   const request = axios.get(SEARCH_URL);
    return {
        type: SEARCH_USER,
        payload: request
    }
}

export function userInfo(name) {
   const url = `${USER_INFO_URL}/${name}`;
   // const request = axios.get(url);
   const request = axios.get(USER_INFO_URL);
    return {
        type: USER_INFO,
        payload: request
    }
}


export function userRepo(name) {
   const url = `${USER_INFO_URL}/${name}/repos`;
   // const request = axios.get(url);
   const request = axios.get(USER_REPO_URL);
    return {
        type: USER_REPO,
        payload: request
    }
}