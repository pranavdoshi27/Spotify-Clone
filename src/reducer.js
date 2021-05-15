export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,

  //remove after finishing developing
  //token:'BQAiyFGljAAibdm8PeBH3IbchYUDU0KIA5qsNqtPk6RxxmJ4MsMfZsTXkRnwJ3GGHWMIPZsPyrSl4KmM6k5FOooPemfpsDg0mR3ku20h0W2Cb91sxLVNpfkVKQMqobGHNFCUsTUwyYq2TBJ1oGd5jLA-Xz_oQHADfKZ45tdHD903QK6c',
};

const reducer=(state,action)=>{
  console.log(action);
  //action
  switch(action.type){
    case 'SET_USER':
    return {
      ...state,
      user:action.user

    };
    case 'SET_TOKEN':
    return{
      ...state,
      token:action.token,
    };
    case 'SET_PLAYLISTS':
    return{
      ...state,
      playlists:action.playlists,
    };
    case 'SET_DISCOVER_WEEKLY':
    return{
      ...state,
      discover_weekly:action.discover_weekly,
    }
    default:return state;
  };
};

export default reducer;
