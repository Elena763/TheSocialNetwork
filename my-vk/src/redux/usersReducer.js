const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        {id: 1, userpic: 'https://mrandmrs50plus.com/wp-content/uploads/2018/02/smiling-woman-2.jpg',
          followed: false, fullname: 'Elena', status: "Hello world!", location: {country: 'Russia', city: 'Samara'}},
        {id: 2, userpic: 'https://gallamed.ru/upload/iblock/ee6/ee6969e643c6bb47242b383b5ab32380.png',
          followed: true, fullname: 'Vlada', status: "Hello!", location: {country: 'Kazakhstan', city: 'Astana'}},
        {id: 3, userpic: 'https://diepenbrockfacialcosmeticsurgery.com/wp-content/uploads/2016/12/AdobeStock_non-surgical.jpg',
          followed: false, fullname: 'Renata', status: "world!", location: {country: 'Russia', city: 'Ufa'}},
        {id: 4, userpic: 'https://455811.selcdn.ru/lovemother/uploads/2018/01/215.jpg',
          followed: true, fullname: 'Stasy', status: "Horld!", location: {country: 'Vietnam', city: 'NhaTrang'}},
    ],
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS: {
            return { ...state, users: [...state.users, ...action.users]}
        }
        default:
            return state;
    }
}

export const followAC = (userID) => ({type: FOLLOW, userID})

export const unfollowAC = (userID) => ({type: UNFOLLOW, userID})

export const setUsersAC = (users) => ({type: SET_USERS, users})

export default usersReducer;