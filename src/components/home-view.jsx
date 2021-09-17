// src/components/Home.js

import React from "react";
import PhotoCard from './photos'
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
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Button from '@material-ui/core/button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';

// Masonry layout for post grid
import Masonry from 'react-masonry-css'

// Logo in src folder
import spacelogo from './spacelogo.png'

/*
 * Set Drawer component styles
*/

const drawerWidth = 320;

/*
 * Layout Styles
*/
const styles = theme => createStyles ({
  root: {
    display: 'flex',
  },
  appBar: {
    height:'64px',
    marginBotom: '10',
    transition: theme.transitions.create(['margin', 'width', 'height'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    height: '0px',
    transition: theme.transitions.create(['margin', 'width', 'height'], {
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
    backgroundColor: '#282828',
    color: '#fff',
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
    marginTop: 51,
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
    letterSpacing: 6,
  },
});

/*
 * API Key
*/

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
      openAlert: false,
      isLoading: false,
      apiStartDate: moment(new Date()).subtract(7, 'd').format('YYYY-MM-DD'),
      apiEndDate: moment(new Date()).format('YYYY-MM-DD'),
      startDate: moment(new Date()).subtract(7, 'd'),
      endDate: new Date(),
    };
    this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
    this.handleCloseAlert = this.handleCloseAlert.bind(this);
  }

  componentDidMount() {
    const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&start_date=${this.state.apiStartDate}&end_date=${this.state.apiEndDate}`;
    this.setState({ isLoading: true })
    axios
    .get(apiUrl)
      .then(res => {
        // handle success
        const photo = res.data;
        this.setState({ photo });
        console.log(photo);
        this.setState({ isLoading: false })
      })
      .catch((err) => {
        // handle error
        console.log(err);
      });
  };

  /*
   * Functions for side panel, set to open by default
  */

  handleDrawerOpen = () => {
    if(this.state.open === false) {
      this.setState({ open: true });
    } else {
      this.setState({ open: false });
    }
    console.log(this.state.open)
  };


  /*
   * Set date change when date picker value changes and stores in state
  */

  handleStartDateChange = (date) => {
    this.setState({startDate: date},
      () => {console.log(this.state.startDate)});
  };

  handleEndDateChange = (date) => {
    const formattedDate = moment(date).format('YYYY-MM-DD');
    this.setState({endDate: formattedDate}, 
      () => {console.log(this.state.endDate)});
  };

  updateDateRange = () => { // Required for setting the api start and end dates
    const apiStartDateFormatter = moment(this.state.startDate).format('YYYY-MM-DD');
    const apiEndDateFormatter = moment(this.state.endDate).format('YYYY-MM-DD');
    this.setState({
      apiStartDate: apiStartDateFormatter,
      apiEndDate: apiEndDateFormatter},
        function() {
          this.componentDidMount();
          console.log(apiStartDateFormatter);
          console.log(apiEndDateFormatter);
        });
    this.handleExploreAlert();
  };

  /*
   * Set alert function for explore button
  */

  handleExploreAlert() {
    this.setState({ openAlert: true });
  };

  handleCloseAlert() {
    this.setState({openAlert: false});
  };

  render() {
    const breakpointColumnsObj = this.state.breakpointColumnsObj;
    const { classes } = this.props;
    const theme = this.props;
    const { open } = this.state;
    let loading = this.props;

    const photos = this.state.photo.map((photos) => (
      <Grid key={photos.date} item>
        <PhotoCard photo={photos} />
      </Grid>
      ));

    if (this.state.isLoading) {
      loading = <CircularProgress size={80} className="loadingIcon" />;
    } else {
      loading = <div className="no-disaply"></div>;
    }

    return (
      <div className="home">

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
                <MenuIcon className="hamburgerIcon" />
                <h5>
                  SPACE IS AWESOME
                </h5>
              </IconButton>
            </Toolbar>
          </AppBar>
        
          {/* Side Panel Starts */}
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

            <img src={spacelogo} alt="Logo" />
            
            <div className="paragraph"><p>Select a date to see more of our amazing galaxy. There's a new picture every day. So the further in the past you go, the more there is to see.</p></div>
            
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
            
              <Grid container justifyContent="space-around">
                <KeyboardDatePicker
                  className="datePicker"
                  margin="normal"
                  disableFuture={true}
                  maxDate={this.state.endDate}
                  maxDateMessage='Start Date cannot exceed End Date'
                  id="date-picker-start"
                  label="Start Date"
                  format="yyyy/MM/dd"
                  showTodayButton={true}
                  onChange={this.handleStartDateChange}
                  value={moment(this.state.startDate)}
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                />

                <KeyboardDatePicker
                  className="datePicker"
                  margin="normal"
                  disableFuture={true}
                  id="date-picker-end"
                  label="End Date"
                  format="yyyy/MM/dd"
                  minDate={moment(this.state.startDate).add(1,'d')}
                  minDateMessage="End Date cannot precede Start Date"
                  value={moment(this.state.endDate)}
                  showTodayButton={true}
                  onChange={this.handleEndDateChange}
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                />
                
              </Grid>
            </MuiPickersUtilsProvider>
          
            <Divider />
            
            <Button onClick={this.updateDateRange} variant="contained" size="medium" className={classes.updateButton}>
              EXPLORE
            </Button>

            <Snackbar
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              open={this.state.openAlert}
              autoHideDuration={4000}
              onClose={this.handleCloseAlert}
              message="A long date range may result in a long load time. Be patient :)"
              action={
                <React.Fragment>
                  <IconButton size="small" aria-label="close" color="inherit" onClick={this.handleCloseAlert}>
                    <CloseIcon fontSize="small" />
                  </IconButton>
                </React.Fragment>
              }
            />
          </Drawer>
      
          {/* End of side panel */}
        
          {/* Photo Content */}
      
          <Grid container spacing={3}
            className={clsx(classes.content, {
              [classes.contentShift]: open,
            })}
          >
            {loading}
            <Masonry
              breakpointCols={breakpointColumnsObj}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column" >      
                {photos.length ? photos : <h2>Sorry, no results.</h2>}
            </Masonry>
          </Grid>
        </div>
      </div>
    );
  }
}

export default withStyles(styles, { theme: true }) (Home);