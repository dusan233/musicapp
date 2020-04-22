import * as actionTypes from "../actionTypes";

const initialState = {
  favoriteTracks: null,
  favoriteAlbums: null,
  favoritePlaylists: null,
  procesing: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FAVORITE_TRACKS:
      return {
        ...state,
        favoriteTracks: [...action.favoriteTracks]
      };
    case actionTypes.FAVORITE_PLAYLISTS:
      return {
        ...state,
        favoritePlaylists: [...action.favoritePlaylists]
      };
    case actionTypes.FAVORITE_ALBUMS:
      return {
        ...state,
        favoriteAlbums: [...action.favoriteAlbums]
      };
    case actionTypes.PROCESING:
      return {
        ...state,
        procesing: true
      };
    case actionTypes.STOP_PROCESING:
      return {
        ...state,
        procesing: false
      };
    default:
      return state;
  }
};

export default reducer;
