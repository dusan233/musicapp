import * as actionTypes from "../actionTypes";

const initialState = {
  popularSongs: null,
  popularPlaylists: null,
  loading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.POPULAR_SONGS:
      return {
        ...state,
        popularSongs: [...action.popularSongs]
      };
    case actionTypes.POPULAR_PLAYLISTS:
      return {
        ...state,
        popularPlaylists: [...action.popularPlaylists]
      };
    case actionTypes.POPULAR_ALBUMS:
      return {
        ...state,
        popularAlbums: [...action.popularAlbums]
      };

    default:
      return state;
  }
};

export default reducer;
