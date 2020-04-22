import * as actionTypes from "../actionTypes";

const favoriteTracks = favoriteTracks => {
  return {
    type: actionTypes.FAVORITE_TRACKS,
    favoriteTracks: favoriteTracks
  };
};

const favoritePlaylists = favoritePlaylists => {
  return {
    type: actionTypes.FAVORITE_PLAYLISTS,
    favoritePlaylists: favoritePlaylists
  };
};

const favoriteAlbums = favoriteAlbums => {
  return {
    type: actionTypes.FAVORITE_ALBUMS,
    favoriteAlbums: favoriteAlbums
  };
};

const procesing = () => {
  return {
    type: actionTypes.PROCESING
  };
};

const stopProcesing = () => {
  return {
    type: actionTypes.STOP_PROCESING
  };
};

export const getFavoriteTracks = () => {
  return dispatch => {
    fetch("https://musicapp-cce92.firebaseio.com/tracks.json")
      .then(response => response.json())
      .then(responseData => {
        let data = [];
        for (let song in responseData) {
          data.push(responseData[song]);
        }
        dispatch(favoriteTracks(data));
      })
      .catch(err => console.log(err));
  };
};

export const getFavoritePlaylists = () => {
  return dispatch => {
    fetch("https://musicapp-cce92.firebaseio.com/playlists.json")
      .then(response => response.json())
      .then(responseData => {
        let data = [];
        for (let song in responseData) {
          data.push(responseData[song]);
        }
        dispatch(favoritePlaylists(data));
      })
      .catch(err => console.log(err));
  };
};

export const getFavoriteAlbums = () => {
  return dispatch => {
    fetch("https://musicapp-cce92.firebaseio.com/albums.json")
      .then(response => response.json())
      .then(responseData => {
        let data = [];
        for (let song in responseData) {
          data.push(responseData[song]);
        }
        dispatch(favoriteAlbums(data));
      })
      .catch(err => console.log(err));
  };
};

export const sendFavoriteTracks = (songData, songId, favTracks) => {
  return dispatch => {
    dispatch(procesing());
    let deleteTrack = false;
    favTracks.forEach(track => {
      if (track.id === songId) {
        deleteTrack = true;
      }
    });
    if (deleteTrack) {
      fetch("https://musicapp-cce92.firebaseio.com/tracks.json")
        .then(response => response.json())
        .then(responseData => {
          for (let smt in responseData) {
            let mainKey = [smt];
            if (responseData[smt].id === songId) {
              fetch(
                `https://musicapp-cce92.firebaseio.com/tracks/${mainKey}.json`,
                {
                  method: "DELETE"
                }
              ).then(response => {
                dispatch(getFavoriteTracks());
                dispatch(stopProcesing());
              });
            }
          }
        })
        .catch(err => console.log(err));
    } else {
      fetch("https://musicapp-cce92.firebaseio.com/tracks.json", {
        method: "POST",
        body: JSON.stringify(songData),
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(response => {
          dispatch(getFavoriteTracks());
          dispatch(stopProcesing());
        })
        .catch(err => console.log(err));
    }
  };
};

export const sendFavoritePlaylists = (
  playlistData,
  playlistId,
  favPlaylists
) => {
  return dispatch => {
    dispatch(procesing());
    let deleteTrack = false;
    favPlaylists.forEach(track => {
      if (track.id === playlistId) {
        deleteTrack = true;
      }
    });
    if (deleteTrack) {
      fetch("https://musicapp-cce92.firebaseio.com/playlists.json")
        .then(response => response.json())
        .then(responseData => {
          for (let smt in responseData) {
            let mainKey = [smt];
            if (responseData[smt].id === playlistId) {
              fetch(
                `https://musicapp-cce92.firebaseio.com/playlists/${mainKey}.json`,
                {
                  method: "DELETE"
                }
              ).then(response => {
                dispatch(getFavoritePlaylists());
                dispatch(stopProcesing());
              });
            }
          }
        })
        .catch(err => console.log(err));
    } else {
      fetch("https://musicapp-cce92.firebaseio.com/playlists.json", {
        method: "POST",
        body: JSON.stringify(playlistData),
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(response => {
          dispatch(getFavoritePlaylists());
          dispatch(stopProcesing());
        })
        .catch(err => console.log(err));
    }
  };
};

export const sendFavoriteAlbums = (albumData, albumId, favAlbum) => {
  return dispatch => {
    dispatch(procesing());
    let deleteTrack = false;
    favAlbum.forEach(track => {
      if (track.id === albumId) {
        deleteTrack = true;
      }
    });
    if (deleteTrack) {
      fetch("https://musicapp-cce92.firebaseio.com/albums.json")
        .then(response => response.json())
        .then(responseData => {
          for (let smt in responseData) {
            let mainKey = [smt];
            if (responseData[smt].id === albumId) {
              fetch(
                `https://musicapp-cce92.firebaseio.com/albums/${mainKey}.json`,
                {
                  method: "DELETE"
                }
              ).then(response => {
                dispatch(getFavoriteAlbums());
                dispatch(stopProcesing());
              });
            }
          }
        })
        .catch(err => console.log(err));
    } else {
      fetch("https://musicapp-cce92.firebaseio.com/albums.json", {
        method: "POST",
        body: JSON.stringify(albumData),
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(response => {
          dispatch(getFavoriteAlbums());
          dispatch(stopProcesing());
        })
        .catch(err => console.log(err));
    }
  };
};
