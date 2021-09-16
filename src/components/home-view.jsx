// src/components/Home.js

import React from "react";
import { Link } from "react-router-dom";
import { PhotoCard } from './photos'
import axios from 'axios';

import './home-view.css';
import moment from 'moment';

// Material Components
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import Grid from '@material-ui/core/Grid';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import clsx from 'clsx';
import { createStyles, withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Button from '@material-ui/core/button';

import Masonry from 'react-masonry-css'


/*
  * Set Drawer component styles
  */

const drawerWidth = 320;

const styles = theme => createStyles ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerContent: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
    marginTop: 30,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
    marginTop: 30,
  },
  updateButton: {
    margin: theme.spacing(4),
  },
});

const apiKey = process.env.REACT_APP_NASA_KEY;

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      photo: [],
      open: true,
      breakpointColumnsObj: {
        default: 3,
        1400: 3,
        1200: 2,
        1000: 1
      },
      apiStartDate: moment(new Date()).format('YYYY-MM-DD'),
      apiEndDate: moment(new Date()).format('YYYY-MM-DD'),
      startDate: new Date(),
    };
    //this.handleDrawerClose = this.handleDrawerClose.bind(this);
    this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
  }

  componentDidMount() {
    const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&start_date=${this.state.apiStartDate}&end_date=${this.state.apiEndDate}`;
    axios
    .get(apiUrl)
      .then(res => {
        // handle success
        const photo = res.data;
        this.setState({ photo });
        console.log(photo);
      })
      .catch((err) => {
        // handle error
        console.log(err);
      });
  };

  handleDrawerOpen = () => {
    if(this.state.open === false) {
      this.setState({ open: true });
    } else {
      this.setState({ open: false });
    }
    console.log(this.state.open)
  };

  // handleDrawerOpen() {
  //   this.setState ({ open: true });
  // };

  // handleDrawerClose() {
  //   this.setState({ open: false });
  // };

  /*
  * Set Date picker params
  */

  handleStartDateChange = (date) => {
    this.setState({startDate: date});
    console.log(this.state.startDate);
  };

  updateDateRange = () => {
    const apiStartDateFormatter = moment(this.state.startDate).format('YYYY-MM-DD');
    this.setState({apiStartDate: apiStartDateFormatter});
    console.log(apiStartDateFormatter);
    this.componentDidMount();
  };

  render() {
    const breakpointColumnsObj = this.state.breakpointColumnsObj;
    const { classes } = this.props;
    const theme = this.props;
    const { open } = this.state;

    const photos = this.state.photo.map((photos) => (
      <Grid key={photos.date} item>
        <PhotoCard photo={photos} />
      </Grid>));

    return (
      <div className="home">
        <Link className="home-link" to="/photos" >See into the stars!</Link>

        {/* Drawer and content */}
        <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={clsx(
            classes.appBar, 
            {[classes.appBarShift]: open,
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={this.handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              SPACE IS AWESOME
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerContent,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerOpen}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </div>
          <Divider />
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid container justifyContent="space-around">
            <KeyboardDatePicker
              margin="normal"
              id="date-picker-start"
              label="Start Date"
              format="yyyy/MM/dd"
              value={this.state.startDate}
              onChange={this.handleStartDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
            
          </Grid>
        </MuiPickersUtilsProvider>
          <Divider />
          <Button onClick={this.updateDateRange} variant="contained" size="medium" color="primary" className={classes.updateButton}>
            UPDATE
          </Button>
        </Drawer>
        <Grid container spacing={3}
          className={clsx(classes.content, {
            [classes.contentShift]: open,
          })}
        >

        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column" >
            {photos.length ? photos : <h2>Sorry, no results. You either tried looking in the future or something else went wrong. If you successfully do see future results, please let me know, I must have discovered timr travel.</h2>}
        </Masonry>
        </Grid>
      </div>
      </div>
    );
  }
}

export default withStyles(styles, { theme: true }) (Home);