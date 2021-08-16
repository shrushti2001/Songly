//empty datalayer

export const initialState = {
    user: null,
    playlists: [],
    spotify: null,
    discover_weekly: null,
    top_artists: null,
    playing: false,
    item: null,
    //remove after debug
    //token:"BQBczq1RnvmvFZ8hhALC7YsFQeDl3MgHkTKPWOioW_bo2UCbp3YhOYBxz2_OX7lbB6jeXnxy-q1pWc4MX6J6V-67DmxF2qOE2cWjO0QYyuR08pyZEgbszJmlA_m15nm_-XP8rSFwdrMMVZlg0dM4q1V_6bFoPwHl0JGfd-eLjGVDOUOMFpAd",
  };
  
//state- current
//action-set to
//action has type and [payload] . type-set user and payload was user in the comments case
const reducer = (state, action) =>{
    console.log(action);
    switch (action.type) {
        case "SET_USER":// here is user set him
            return {
                ...state,//keep what is in current state
                user: action.user,//update user slice with what action.user was       
            };
        case "SET_TOKEN":
            return{
                 ...state,
                 token:action.token,
            };
        case "SET_DISCOVER_WEEKLY":
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            };
            
        case "SET_PLAYING":
            return {
            ...state,
            playing: action.playing,
            };
    
        case "SET_ITEM":
            return {
            ...state,
            item: action.item,
            };
        case "SET_PLAYLISTS":
        return{
                ...state,
                playlists:action.playlists,
            };
        default:
            return state;
    }
};

export default reducer;