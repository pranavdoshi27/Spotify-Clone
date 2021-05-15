// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#
export const authEndpoint = "https://accounts.spotify.com/authorize";
// Replace with your app's client ID, redirect URI and desired scopes
const clientId = "6099e7a0bdf14aba91c62c38f371edcc";
const redirectUri = "http://localhost:3000/";
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];


export const getTokenFromUrl=function(){

  return window.location.hash
  .substring(1)
  .split('&')
  .reduce((initial, item) => {
    //accesstoken=my super secret key https://accounts.spotify.com/en/authorize?client_id=6099e7a0bdf14aba91c62c38f371edcc&redirect_uri=http:%2F%2Flocalhost:3000%2F&scope=user-read-currently-playing%20user-read-recently-played%20user-read-playback-state%20user-top-read%20user-modify-playback-state&response_type=token&show_dialog=true
    var parts=item.split('=');
    initial[parts[0]]=decodeURIComponent(parts[1]);
    return initial;
  },{});
};
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;
