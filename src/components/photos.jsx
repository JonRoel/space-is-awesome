import React from "react";

//Material UI components
import { 
  Tooltip, 
  Card, 
  CardContent, 
  CardActions, 
  Collapse, 
  IconButton, 
  Typography, 
  Modal, 
  Backdrop, } 
    from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import HdIcon from '@material-ui/icons/Hd';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Fade from '@material-ui/core/Fade';

// Styles
import './photos.css';

export default class PhotoCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      expanded: false,
      favoriteIconActive: false,
      favorites: [],
    }
    this.handleExpandClick = this.handleExpandClick.bind(this);
  }

  /*
   * Functions for hidden content in cards
  */

  handleExpandClick() {
    const { expanded } = this.state;
    this.setState ({
      expanded: !expanded
    });
  };

  handleExpnandClose = () => {
    this.setState({ expanded: false})
  }

  /*
   * Functions for the HD modal
  */

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({ open: false});
  };

  /*
   * Sets Favorites, at this time it only changes the state to give the button a dynamic experience
  */

  addToFaves = (e) => {
    if(!this.state.favoriteIconActive) {
      this.setState({favoriteIconActive: true})
      this.setState(state => {
        const favorites = [...state.favorites, this.props.photo.url];
        return {
          favorites
        }
      });
    } else {
      this.setState({ favoriteIconActive: false })
      var faves = [...this.state.favorites];
      var index = faves.indexOf(e.target.value)
      if (index !== -1) {
        faves.splace(index, 1);
        this.setState({ favorites: faves })
        console.log( this.state.favorites);
        };
      };
    }

  render() {
    const { photo } = this.props;
    const { expanded } = this.state;
    const { open } = this.state;
    
    let favoritesIcon =  this.props;

    if (!this.state.favoriteIconActive) {
      favoritesIcon = <FavoriteBorderOutlinedIcon />;
    } else {
      favoritesIcon = <FavoriteIcon id="faveIcon" />;
    };

    return (
      <div className="cardWrapper">    
        {/* CARD START */}
        <Card className="nasaPhotoCard">
          <CardContent>
            <h1>{photo.title}</h1>
            <Typography className="photoDateInfo">Published: {photo.date}</Typography>
          </CardContent>

          {/* This will detect media type for video or image rendering */}

          {photo.media_type === "image" ? (
            <img
              src={photo.url}
              alt={photo.title}
              className="nasaPhoto"
            />
          ) : (
            <iframe
              title="space-video"
              src={photo.url}
              frameBorder="0"
              allow="autoplay"
              allowFullScreen
              className="nasaPhoto"
            />
          )}

          <CardActions disableSpacing>
            <IconButton aria-label="favorites" onClick={this.addToFaves}>
              {favoritesIcon}
            </IconButton>
            
            {/* If media type is video, no HD icon will appear */}
            {photo.media_type === "image" ? (
              <Tooltip title="View HD Version" placement="right" arrow>
                <IconButton onClick={this.handleOpen}>
                  <HdIcon />
                </IconButton>
              </Tooltip>
            ) : (
              <div />
            )}
            <IconButton
              className={
                expanded ? 'expand' : 'expandOpen'
              }
              onClick={this.handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>{photo.explanation}</Typography>
            </CardContent>
          </Collapse>
        </Card>

        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className="hdModal"
          open={open}
          onClose={this.handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <div className="hdModal-Content">
            <img
                src={photo.hdurl}
                alt={photo.title}
                className="hdNasaPhoto"
              />
            </div>
          </Fade>
        </Modal>
      </div>
    );
  }
}