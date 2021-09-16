import React from "react";

//Material UI components
import { withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Tooltip from '@material-ui/core/tooltip';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
//import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import HdIcon from '@material-ui/icons/Hd';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

//styles
import './photos.css';

let styles = theme => ({
 // Card Component
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
});

export class PhotoCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      expanded: false,
    }
    this.handleExpandClick = this.handleExpandClick.bind(this);
  }

  handleExpandClick() {
    const { expanded } = this.state;
    this.setState ({
      expanded: !expanded
    });
  };

  handleExpnandClose = () => {
    this.setState({ expanded: false})
  }

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({ open: false});
  };

  render() {
    const { photo } = this.props;
    const classes = this.props;
    const { expanded } = this.state;
    const { open } = this.state;

    return (
      <div className="cardWrapper">    
          {/* CARD START */}
          <Card className="nasaPhotoCard">
          <CardContent>
          <h1>{photo.title}</h1>
            <Typography className="photoDateInfo">Published: {photo.date}</Typography>
          </CardContent>

          {/* Imaage Detects media type for video or image rendering */}

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
                gesture="media"
                allow="encrypted-media"
                allowFullScreen
                className="photo"
              />
            )}
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteBorderOutlinedIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
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
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
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

export default withStyles(styles) (PhotoCard);