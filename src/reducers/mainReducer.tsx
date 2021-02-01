import axios from 'axios';
import {Dispatch} from 'redux';
import {
    getYMDString
} from '../helpers/dateHelper';
import {BasePayloadAction} from "./interfaces";

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
        case MainReducerActions.SHOW_SCHEDULE: {
            let stateNew = {
                ...state
            };

            stateNew.groups = [...action.payload];

            return stateNew;
        }
        case MainReducerActions.SET_GROUP_COOKIE: {
            let stateNew = {
                ...state
            };
            stateNew.selectedGroup = action.payload;

            return stateNew;
        }
        case MainReducerActions.IS_ON_LOGIN: {
            let stateNew = {
                ...state
            };
            stateNew.isOnLogin = action.payload;
            return stateNew;
        }
        case MainReducerActions.IS_ONLINE: {
            let stateNew = {
                ...state
            };
            stateNew.isOnline = action.payload;
            return stateNew;
        }
        case MainReducerActions.UPDATE_SAVED_TIME: {
            let stateNew = {
                ...state
            };
            console.log('savedAt updated, new value is', new Date());
            stateNew.savedAt = new Date();

            return stateNew;
        }
        case MainReducerActions.LOAD_SERVICES: {
            let stateNew = {
                ...state
            };
            stateNew.services = action.payload;
            return stateNew;
        }
        case MainReducerActions.SELECT_SERVICE: {
            return {
                ...state,
                selectedService: action.payload,
            };
        }
        default:
            return state;
    }
};

const showScheduleActionCreator = (payload: string[]) => {
    return ({
        type: MainReducerActions.SHOW_SCHEDULE,
        payload: payload,
    });
};

const setGroupActionCreator = (payload: string) => ({
    type: MainReducerActions.SET_GROUP_COOKIE,
    payload: payload,
});

export const setIsOnLoginActionCreator = (payload: boolean) => ({
    type: MainReducerActions.IS_ON_LOGIN,
    payload: payload,
});

export const setIsOnlineActionCreator = (payload: boolean) => ({
    type: MainReducerActions.IS_ONLINE,
    payload: payload,
});

export const getScheduleDataThunkCreator = (pathGroup: string) => (dispatch: Dispatch<any>) => {

    const dateNow = getYMDString();

    let selectedGroup = localStorage.getItem('selectedGroup');

    if (!selectedGroup) {
        selectedGroup = pathGroup;
    }

    if (selectedGroup) {
        dispatch(setGroupActionCreator(selectedGroup));
    }

    axios.get('/api/timetable/').then(res => {
        const schedule = {
            data: [...res.data],
            savedAt: dateNow,
        };
        console.log(schedule);
        dispatch(showScheduleActionCreator(schedule.data));
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
    type: MainReducerActions.UPDATE_SAVED_TIME,
});

const loadServicesActionCreator = (payload: IService[] | null) => ({
    type: MainReducerActions.LOAD_SERVICES,
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
    type: MainReducerActions.SELECT_SERVICE,
    payload: payload,
});
export default mainReducer;
