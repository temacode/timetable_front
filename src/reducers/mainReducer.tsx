import axios from 'axios';
import { Dispatch } from 'redux';
import {
    getYMDString
} from '../helpers/dateHelper';

interface IService {
    name: string,
        displayName: string,
        path: string,
        selected: boolean
}

interface IInitialState {
    groups: string[],
        selectedGroup: string,
        isOnline: boolean,
        isOnLogin: boolean,
        savedAt: Date,
        services: IService[] | null,
        selectedService: IService | null,
}

export interface BasePayloadAction {
    type: Actions,
        payload: any,
}

enum Actions {
    SHOW_SHEDULE = 'SHOW_SHEDULE',
        SET_GROUP_COOKIE = 'SET_GROUP_COOKIE',
        IS_ON_LOGIN = 'IS_ON_LOGIN',
        IS_ONLINE = 'IS_ONLINE',
        UPDATE_SAVED_TIME = 'UPDATE_SAVED_TIME',
        LOAD_SERVICES = 'LOAD_SERVICES',
        SELECT_SERVICE = 'SELECT_SERVICE',
}

let initialState: IInitialState = {
    groups: [],
    selectedGroup: '',
    isOnline: false,
    isOnLogin: false,
    savedAt: new Date(),
    services: null,
    selectedService: null,
};

let mainReducer = (state = initialState, action: BasePayloadAction) => {
    switch (action.type) {
        case Actions.SHOW_SHEDULE: {
            let stateNew = {
                ...state
            };

            stateNew.groups = [...action.payload];

            return stateNew;
        }
        case Actions.SET_GROUP_COOKIE: {
            let stateNew = {
                ...state
            };
            stateNew.selectedGroup = action.payload;

            return stateNew;
        }
        case Actions.IS_ON_LOGIN: {
            let stateNew = {
                ...state
            };
            stateNew.isOnLogin = action.payload;
            return stateNew;
        }
        case Actions.IS_ONLINE: {
            let stateNew = {
                ...state
            };
            stateNew.isOnline = action.payload;
            return stateNew;
        }
        case Actions.UPDATE_SAVED_TIME: {
            let stateNew = {
                ...state
            };
            console.log('savedAt updated, new value is', new Date());
            stateNew.savedAt = new Date();

            return stateNew;
        }
        case Actions.LOAD_SERVICES: {
            let stateNew = {
                ...state
            };
            stateNew.services = action.payload;
            return stateNew;
        }
        case Actions.SELECT_SERVICE: {
            return {
                ...state,
                selectedService: action.payload,
            };
        }
        default:
            return state;
    }
};

const showSheduleActionCreator = (payload: string[]) => {
    return ({
        type: Actions.SHOW_SHEDULE,
        payload: payload,
    });
};

const setGroupActionCreator = (payload: string) => ({
    type: Actions.SET_GROUP_COOKIE,
    payload: payload,
});

export const setIsOnLoginActionCreator = (payload: boolean) => ({
    type: Actions.IS_ON_LOGIN,
    payload: payload,
});

export const setIsOnlineActionCreator = (payload: boolean) => ({
    type: Actions.IS_ONLINE,
    payload: payload,
});

export const getSheduleDataThunkCreator = (pathGroup: string) => (dispatch: Dispatch<any>) => {

    const dateNow = getYMDString();

    let selectedGroup = localStorage.getItem('selectedGroup');

    if (!selectedGroup) {
        selectedGroup = pathGroup;
    }

    if (selectedGroup) {
        dispatch(setGroupActionCreator(selectedGroup));
    }

    axios.get('/api/timetable/').then(res => {
        const shedule = {
            data: [...res.data],
            savedAt: dateNow,
        };
        console.log(shedule);
        dispatch(showSheduleActionCreator(shedule.data));
    });
};

export const setGroupThunkCreator = (value: string = '') => (dispatch: Dispatch<any>) => {
    if (value) {
        try {
            localStorage.setItem('selectedGroup', value);
        } catch (error) {
            console.log('Память локального хранилища переполнена');
            console.log(error);
        }
        dispatch(setGroupActionCreator(value));
    } else {
        console.log('Ошибка получения значения');
    }
};

export const updateSavedTimeActionCreator = () => ({
    type: Actions.UPDATE_SAVED_TIME,
});

const loadServicesActionCreator = (payload: IService[] | null) => ({
        type: Actions.LOAD_SERVICES,
        payload: payload,
    } as const);

export const loadServicesThunkCreator = () => (dispatch: Dispatch<any>) => {
    axios.get('/api/services/')
        .then(res => {
            console.log(res.data);
            dispatch(loadServicesActionCreator(res.data));
        })
        .catch(() => console.log('Ошибка загрузки роута'));
};

export const selectServiceActionCreator = (payload: IService[] | null) => ({
    type: Actions.SELECT_SERVICE,
    payload: payload,
});
export default mainReducer;