import axios from 'axios';
import { scrollTo } from '../helpers/scrollLeftAnimation';

const SHOW_SHEDULE = 'SHOW_SHEDULE';
const SET_GROUP_COOKIE = 'SET_GROUP_COOKIE';
const IS_ON_LOGIN = 'IS_ON_LOGIN';
const IS_ONLINE = 'IS_ONLINE';

let initialState = {
    groups: [],
    selectedGroup: '',
    isOnline: false,
    isOnLogin: false,
}

let mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_SHEDULE:
            let sheduleState = { ...state };

            sheduleState.groups = [...action.data];

            return sheduleState;
        case SET_GROUP_COOKIE:
            let setGroupCookieState = { ...state };
            setGroupCookieState.selectedGroup = action.data;

            return setGroupCookieState;
        case IS_ON_LOGIN:
            let isOnLoginState = {...state};
            isOnLoginState.isOnLogin = action.data;
            return isOnLoginState;
        case IS_ONLINE:
            let isOnlineState = {...state};
            isOnlineState.isOnline = action.data;
            return isOnlineState;
        default:
            return state;
    }
}

const showSheduleActionCreator = (data) => {
    return({
        type: SHOW_SHEDULE,
        data: data,
    });
}

const setGroupActionCreator = data => ({
    type: SET_GROUP_COOKIE,
    data: data,
});

export const setIsOnLoginActionCreator = data => ({
    type: IS_ON_LOGIN,
    data: data,
});

export const setIsOnlineActionCreator = data => ({
    type: IS_ONLINE,
    data: data,
});

export const getSheduleDataThunkCreator = pathGroup => dispatch => {

    let selectedGroup = localStorage.getItem('selectedGroup');

    const shedule = JSON.parse(localStorage.getItem('shedule'));

    if (!selectedGroup) {
        selectedGroup = pathGroup;
    }

    if (selectedGroup) {
        dispatch(setGroupActionCreator(selectedGroup));
    }

    if (shedule) {
        dispatch(showSheduleActionCreator(shedule));
    } else {
        axios.get('/api/timetable/').then(res => {
            localStorage.setItem('shedule', JSON.stringify(res.data));
            dispatch(showSheduleActionCreator(res.data));
        });
    }
}

export const setGroupThunkCreator = (value = null, ref) => dispatch => {
    scrollTo(ref, 0, 300);
    if (value) {
        localStorage.setItem('selectedGroup', value);
        dispatch(setGroupActionCreator(value));
    } else {
        console.log('Ошибка получения значения');
    }
}

export default mainReducer;