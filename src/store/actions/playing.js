import * as actionTypes from "../actionTypes";

export const sendCurrentSong = currentSong => {
  return {
    type: actionTypes.PLAY_SONG,
    currentSong: currentSong
  };
};

export const playPause = () => {
  return {
    type: actionTypes.PLAY_PAUSE
  };
};

export const play = () => {
  return {
    type: actionTypes.PLAY_JUST
  };
};

export const currentPlaylist = (currentPlaylist, currentPlaylistId) => {
  return {
    type: actionTypes.CURRENT_PLAYLIST,
    currentPlaylist: currentPlaylist,
    currentPlaylistId: currentPlaylistId
  };
};

export const nextCurrentPlaylistSongIndex = () => {
  return {
    type: actionTypes.NEXT_CURRENT_PLAYLIST_SONG
  };
};

export const prevCurrentPlaylistSongIndex = () => {
  return {
    type: actionTypes.PREV_CURRENT_PLAYLIST_SONG
  };
};

export const minusNextCurrentPlaylistSongIndex = () => {
  return {
    type: actionTypes.MINUS_NEXT_CURRENT_PLAYLIST_SONG
  };
};

export const minusPrevCurrentPlaylistSongIndex = () => {
  return {
    type: actionTypes.MINUS_PREV_CURRENT_PLAYLIST_SONG
  };
};

export const clearLogicForPlaylist = () => {
  return {
    type: actionTypes.CLEAR_PLAYLIST_LOGIC
  };
};

export const sendCurrentPlaylist = currentPlaylistId => {
  return dispatch => {
    fetch(
      `https://deezerdevs-deezer.p.rapidapi.com/radio/${currentPlaylistId}/tracks`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
          "x-rapidapi-key": "2532d7c860mshce641c0cbfd7b81p1604aejsnf878c3d09546"
        }
      }
    )
      .then(response => response.json())
      .then(responseData => {
        dispatch(clearLogicForPlaylist());
        dispatch(currentPlaylist(responseData.data, currentPlaylistId));
        dispatch(sendCurrentSong(responseData.data[0]));
        dispatch(nextCurrentPlaylistSongIndex());
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const sendCurrentAlbum = currentPlaylistId => {
  return dispatch => {
    fetch(
      `https://deezerdevs-deezer.p.rapidapi.com/album/${currentPlaylistId}/tracks`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
          "x-rapidapi-key": "2532d7c860mshce641c0cbfd7b81p1604aejsnf878c3d09546"
        }
      }
    )
      .then(response => response.json())
      .then(responseData => {
        dispatch(clearLogicForPlaylist());
        dispatch(currentPlaylist(responseData.data, currentPlaylistId));
        dispatch(sendCurrentSong(responseData.data[0]));
        dispatch(nextCurrentPlaylistSongIndex());
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const sendCurrentPlaylistReal = currentPlaylistId => {
  return dispatch => {
    fetch(
      `https://deezerdevs-deezer.p.rapidapi.com/playlist/${currentPlaylistId}/tracks`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
          "x-rapidapi-key": "2532d7c860mshce641c0cbfd7b81p1604aejsnf878c3d09546"
        }
      }
    )
      .then(response => response.json())
      .then(responseData => {
        dispatch(clearLogicForPlaylist());
        dispatch(currentPlaylist(responseData.data, currentPlaylistId));
        dispatch(sendCurrentSong(responseData.data[0]));
        dispatch(nextCurrentPlaylistSongIndex());
      })
      .catch(err => {
        console.log(err);
      });
  };
};
