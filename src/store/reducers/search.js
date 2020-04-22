import * as actionTypes from "../actionTypes";

const initialState = {
  tracks: null,
  albums: null,
  playlists: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_TRACKS:
      return {
        ...state,
        tracks: [...action.tracks]
      };
    case actionTypes.SEARCH_ALBUMS:
      return {
        ...state,
        albums: [...action.albums]
      };
    case actionTypes.SEARCH_PLAYLISTS:
      return {
        ...state,
        playlists: [...action.playlists]
      };
    default:
      return state;
  }
};

export default reducer;
