// src/components/Home.js

import React, { useEffect, useState, useRef, Component } from "react";
import { Link } from "react-router-dom";
import PhotoCard from './photos'
import axios from 'axios';

// Material Components
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import Grid from '@material-ui/core/Grid';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
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


/*
  * Set Drawer component styles
  */

const drawerWidth = 320;

const useStyles = makeStyles((theme) => ({
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
  drawerPaper: {
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
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

const apiKey = process.env.REACT_APP_NASA_KEY;


export default class Home extends React.Compoent {
  constructor() {
    super();
    this.state = {
      photo: [],
      setPhoto: [],
      apiUrl: `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=2021-09-05`,
      open: true,
      setOpen: true,
    }
  }

  /*
  * Set apiUrl and api component details
  */

  //https://api.nasa.gov/planetary/apod?api_key=${apiKey}&start_date=2021-09-06&end_date=2021-09-10

  getPhotos = () => {
    axios
    .get(this.state.apiUrl)
      .then((response) => {
        // handle success
        console.log(response);
        const myPhotos = response.data;
        setPhoto(myPhotos);
      })
      .catch((err) => {
        // handle error
        console.log(err);
      }); []
  };

  // End of API

  const classes = useStyles();
  const theme = useTheme();

  handleDrawerOpen = () => {
    this.setState({
      setOpen: true
    });
  };

  handleDrawerClose = () => {
    this.setState({
      setOpen: false
    });
  };

  /*
  * Set Date picker params
  */

  const [startDate, setStartDate] = React.useState(new Date());
  const [endDate, setEndDate] = React.useState(new Date());

  const handleStartDateChange = (date) => {
    setStartDate(date);
    console.log(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
    console.log(date);
  };

  // API -------------------------------

  componentDidMount() {
    // api call
    fetch(this.state.apiUrl).then(resp=>resp.json())
    .then(resp=>this.setState({photo:resp))
  };

  return (
    <div className="home">
      <Link className="home-link" to="/photos" >See into the stars!</Link>

      {/* Drawer and content */}
      <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Persistent drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
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
            value={startDate}
            onChange={handleStartDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
          <KeyboardDatePicker
            margin="normal"
            id="date-picker-end"
            label="End Date"
            format="yyyy/MM/dd"
            value={endDate}
            onChange={handleEndDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
        </Grid>
      </MuiPickersUtilsProvider>
        <Divider />
      </Drawer>
      <div
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        {/* {photo.map((photos) => (
          <PhotoCard key={photos.date} photoData={photo} />
        ))} */}
        <PhotoCard photoData={photo} />
      </div>
    </div>
    </div>
  );
}