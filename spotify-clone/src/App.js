import React,{useEffect,useState} from "react";
import './App.css';
import Login from './Login';
import {getTokenFromUrl} from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player/Player"
import {useDataLayerValue} from "./DataLayer";

const spotify=new SpotifyWebApi();
function App() {


  // if we need any value we use this and put value in {}
  // dispatch is used to shooot at the data layer to update and stuff
  // watch amazon clone

  //prop dill spotify object through Player
  const [{user,token},dispatch] = useDataLayerValue();     

  useEffect(() => {
    const hash= getTokenFromUrl();
    window.location.hash="";
    const _token=hash.access_token;

    if(_token){
      spotify.setAccessToken(_token);
        dispatch({
          type:'SET_TOKEN',
          token:_token,
        });

      spotify.getMe().then(user=>{
        dispatch({
          type: 'SET_USER',
          user: user,
        });
      });
      spotify.getUserPlaylists().then((playlists)=>{
        dispatch({
          type:"SET_PLAYLISTS",
          playlists:playlists,
        });
      });
      spotify.getPlaylist("37i9dQZF1EM24Q2omXr4Tz").then((response) =>
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        })
      );
    }
  }, []);


  return (
    <div className="app">
      {token?(
        <Player spotify={spotify} />
      ):(
      <Login />)
      }
    </div>
  );
}

export default App;
