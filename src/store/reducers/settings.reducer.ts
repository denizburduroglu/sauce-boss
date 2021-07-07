import { SettingsActions, SettingsActionTypes } from "../actions/settings.action";


export let initialState = [];

export function settingsReducer(state = initialState, action: SettingsActions) {
    switch(action.type) {
        case SettingsActionTypes.ADD_SETTINGS:
            return [...state, action.payload];
        default:
            return state;
    }
}
