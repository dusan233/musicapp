import * as actionTypes from "../actionTypes";

const startLoading = () => {
  return {
    type: actionTypes.START_LOADING
  };
};

const stopLoading = () => {
  return {
    type: actionTypes.STOP_LOADING
  };
};

const popularSongs = popularSongs => {
  return {
    type: actionTypes.POPULAR_SONGS,
    popularSongs: popularSongs
  };
};

const popularPlaylists = popularPlaylists => {
  return {
    type: actionTypes.POPULAR_PLAYLISTS,
    popularPlaylists: popularPlaylists
  };
};

export const fetchPopularSongs = () => {
  return dispatch => {
    dispatch(startLoading());
    fetch(" https://deezerdevs-deezer.p.rapidapi.com/radio/37151/tracks", {
      method: "GET",
      headers: {
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
        "x-rapidapi-key": "2532d7c860mshce641c0cbfd7b81p1604aejsnf878c3d09546"
      }
    })
      .then(response => response.json())
      .then(responseData => {
        dispatch(popularSongs(responseData.data));
        dispatch(stopLoading());
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const fetchPopularPlaylists = () => {
  return dispatch => {
    dispatch(startLoading());
    fetch("https://deezerdevs-deezer.p.rapidapi.com/radio/lists", {
      method: "GET",
      headers: {
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
        "x-rapidapi-key": "2532d7c860mshce641c0cbfd7b81p1604aejsnf878c3d09546"
      }
    })
      .then(response => response.json())
      .then(responseData => {
        dispatch(popularPlaylists(responseData.data));
        dispatch(stopLoading());
      })
      .catch(err => {
        console.log(err);
      });
  };
};
