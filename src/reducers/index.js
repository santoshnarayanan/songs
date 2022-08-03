import { combineReducers } from "redux";

const songsReducer =  () => {
    return [
        {title:'Livin La Vida Loca', duration:'4:05' },
        {title:'Macarena', duration:'3:00' },
        {title:'Beat It', duration:'3:15' },
        {title:'Bailamos', duration:'4:05' }
    ];   
};


const selectedSongReducer = (selectedSong=null, action) => {
    if(action.type === 'SONG_SELECTED'){
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong:selectedSongReducer
});