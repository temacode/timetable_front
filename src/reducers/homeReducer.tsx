import {BasePayloadAction} from "./interfaces";

let initialState = {

};

let homeReducer = (state = initialState, action: BasePayloadAction) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default homeReducer;
