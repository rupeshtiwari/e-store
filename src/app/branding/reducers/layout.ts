import * as layout from '../actions/layout';
import { assoc } from 'ramda';

export interface State {
  showSidenav: boolean;
}

const initialState: State = {
  showSidenav: false,
};

export function reducer(state = initialState, action: layout.Actions): State {
  switch (action.type) {
    case layout.CLOSE_SIDENAV:
      return assoc('showSidenav', false, state);
    case layout.OPEN_SIDENAV:
      return assoc('showSidenav', true, state);
    default:
      return state;
  }
}

export const getShowSidenav = (state: State) => state.showSidenav;
