import React from 'react';
import "./Footer.css";
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import {Grid ,Slider} from '@material-ui/core';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';


function Footer()
{
  return(
    <div className="footer">
    <div className="footer_left">
      <img className="footer_albumLogo"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKiBGIhFYsDxKSo83qzvmoiiXdWE25dm-81A&usqp=CAU" alt="" />
      <div className="footer_songInfo">
        <h4>Perfect</h4>
        <p>Ed </p>
      </div>
    </div>
    <div className="footer_center">
      <ShuffleIcon className="footer_green"/>
      <SkipPreviousIcon className="footer_icon"/>
      <PlayCircleOutlineIcon fontSize="large" className="footer_icon"/>
      <SkipNextIcon className="footer_icon"/>
      <RepeatIcon className="footer_green"/>
    </div>
    <div className="footer_right">
      <Grid container spacing={2}>
        <Grid item>
          <PlaylistPlayIcon/>

        </Grid>
        <Grid item>
          <VolumeDownIcon/>
        </Grid>
        <Grid item xs>
          <Slider/>
        </Grid>
        <Grid item>
          <VolumeUpIcon/>
        </Grid>
      </Grid>
    </div>
    </div>
  )
}

export default Footer;
