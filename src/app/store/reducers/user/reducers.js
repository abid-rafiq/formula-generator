import { updateLoggedUserData } from "../../../Utils/Helper";

const initalState = {
    user: null,
    subscription: null,
    teams: null,
}

export const userInfoReducers = (state = initalState, action) => {
    switch (action.type) {
        case 'UPDATE_USER_INFO':
            state.user = action.payload.user;
            state.subscription = action.payload.subscription;
            state.teams = action.payload.teams || [];
            updateLoggedUserData(action.payload.user)
            state = {...state};
            return state;
        default:
            return state;
    }
}