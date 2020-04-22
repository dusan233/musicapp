import * as actionTypes from "../actionTypes";

const initialState = {
  currentSong: null,
  playing: false,
  showAudio: false,
  currentPlaylist: null,
  currentPlaylistId: null,
  nextPlaylistSongIndex: 0,
  prevPlaylistSongIndex: -1
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PLAY_SONG:
      return {
        ...state,
        currentSong: action.currentSong,
        playing: state.currentSong
          ? state.currentSong.id === action.currentSong.id
            ? !state.playing
            : true
          : true,
        showAudio: true
      };
    case actionTypes.PLAY_PAUSE:
      return {
        ...state,
        playing: !state.playing
      };
    case actionTypes.PLAY_JUST:
      return {
        ...state,
        playing: true
      };
    case actionTypes.CURRENT_PLAYLIST:
      return {
        ...state,
        currentPlaylist: [...action.currentPlaylist],
        currentPlaylistId: action.currentPlaylistId
      };
    case actionTypes.NEXT_CURRENT_PLAYLIST_SONG:
      return {
        ...state,
        nextPlaylistSongIndex: state.nextPlaylistSongIndex + 1
      };
    case actionTypes.PREV_CURRENT_PLAYLIST_SONG:
      return {
        ...state,
        prevPlaylistSongIndex: state.prevPlaylistSongIndex + 1
      };
    case actionTypes.MINUS_NEXT_CURRENT_PLAYLIST_SONG:
      return {
        ...state,
        nextPlaylistSongIndex: state.nextPlaylistSongIndex - 1
      };
    case actionTypes.MINUS_PREV_CURRENT_PLAYLIST_SONG:
      return {
        ...state,
        prevPlaylistSongIndex: state.prevPlaylistSongIndex - 1
      };
    case actionTypes.CLEAR_PLAYLIST_LOGIC:
      return {
        ...state,

        currentPlaylist: null,
        nextPlaylistSongIndex: 0,
        prevPlaylistSongIndex: -1,
        currentPlaylistId: null
      };
    default:
      return state;
  }
};

export default reducer;
