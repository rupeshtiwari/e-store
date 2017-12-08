import { User } from '../models/user';

export interface State {
    user: User;
}

export const initialState: State = {
    user: { id: 'user1', name: 'Guest' }
};

export function reducer(state = initialState, action = {}) {
    return state;
};
