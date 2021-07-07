import { Action, createAction } from '@ngrx/store';
import { Settings } from 'src/models/settings';

export enum SettingsActionTypes {
    ADD_SETTINGS = 'ADD_SETTINGS',
    REMOVE_SETTINGS = 'REMOVE_SETTINGS'
}
export class AddSettings implements Action {
    readonly type = SettingsActionTypes.ADD_SETTINGS;
    constructor(public payload: Settings){}
}

export class RemoveSettings implements Action {
    readonly type = SettingsActionTypes.REMOVE_SETTINGS;
    constructor(public payload: Settings) {}
}

export type SettingsActions = AddSettings | RemoveSettings;