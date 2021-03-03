import {BasePayloadAction} from "./interfaces";
import {Schedule} from "../libs/common/src/lib/interfaces/schedule";

interface State {
    schedule: Schedule[]
}

let initialState = {
    schedule: [],
};

const lessonReducer = (state = initialState, action: BasePayloadAction) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default lessonReducer;
