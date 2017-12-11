import { User } from '../models/user';

export interface State {
    user: User;
    loggedIn: boolean;
}

export const initialState: State = {
    user: { id: 'user1', name: 'Guest' }
    , loggedIn: false
};

export function reducer(state = initialState, action = {}) {
    return state;
};

export const getLoggedIn = (state: State) => state.loggedIn;


