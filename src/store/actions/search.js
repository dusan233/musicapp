import * as actionTypes from "../actionTypes";

const tracks = tracks => {
  return {
    type: actionTypes.SEARCH_TRACKS,
    tracks: tracks
  };
};

const albums = albums => {
  return {
    type: actionTypes.SEARCH_ALBUMS,
    albums: albums
  };
};

const playlists = playlists => {
  return {
    type: actionTypes.SEARCH_PLAYLISTS,
    playlists: playlists
  };
};

export const fetchSearchedTracks = query => {
  return dispatch => {
    fetch(`https://deezerdevs-deezer.p.rapidapi.com/search/track?q=${query}`, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
        "x-rapidapi-key": "2532d7c860mshce641c0cbfd7b81p1604aejsnf878c3d09546"
      }
    })
      .then(response => response.json())
      .then(responseData => {
        dispatch(tracks(responseData.data));
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const fetchSearchedAlbums = query => {
  return dispatch => {
    fetch(`https://deezerdevs-deezer.p.rapidapi.com/search/album?q=${query}`, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
        "x-rapidapi-key": "2532d7c860mshce641c0cbfd7b81p1604aejsnf878c3d09546"
      }
    })
      .then(response => response.json())
      .then(responseData => {
        dispatch(albums(responseData.data));
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const fetchSearchedPlaylists = query => {
  return dispatch => {
    fetch(
      `https://deezerdevs-deezer.p.rapidapi.com/search/playlist?q=${query}`,
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
        dispatch(playlists(responseData.data));
      })
      .catch(err => {
        console.log(err);
      });
  };
};
