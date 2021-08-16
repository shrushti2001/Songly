import React from 'react';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import RepeatIcon from '@material-ui/icons/Repeat';
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import "./Footer.css";
import { Grid, Slider } from "@material-ui/core";


function Footer() {
    return (
        <div className="footer">
            <div className="footer__left">
                <img className="footer__albumLogo" src="data:image/png;base64,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"/>
                <div className="footer__songInfo">
                    <h4>Song name</h4>
                    <p>Artist</p>
                </div>
            </div>
            <div className="footer__center">
                <ShuffleIcon className="footer__green" />
                <SkipPreviousIcon className="footer__icon" />
                <PlayCircleOutlineIcon
                    fontSize="large"
                    className="footer__icon"
                />
                <SkipNextIcon className="footer__icon" />
                <RepeatIcon className="footer__green" />
            </div>
            <div className="footer__right">
                <Grid container spacing={2}>
                <Grid item>
                    <PlaylistPlayIcon />
                </Grid>
                <Grid item>
                    <VolumeDownIcon />
                </Grid>
                <Grid item xs>
                    <Slider aria-labelledby="continuous-slider" />
                </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Footer
