import * as React from 'react';
import { useNavigate } from 'react-router-dom';
// import { useEffect } from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import MovieIcon from '@material-ui/icons/Movie';
import SearchIcon from '@material-ui/icons/Search';
import TvIcon from '@material-ui/icons/Tv';


const useStyles = makeStyles({
  root: {
    width: '100%',
    position: "fixed",
    bottom: 0,
    backgroundColor: "#2d313a",
    zIndex: 100,
  },
});
export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const history = useNavigate();

  React.useEffect(()=> {
    if(value === 0)
    {
      history("/");
    }
    else if(value === 1) history("/movies");
    else if(value === 2) history("/series");
    else if(value === 3) history("/search");
    // eslint-disable-next-line
  },[value,history])

  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        className={classes.root}
      >
        <BottomNavigationAction  label="Trending" icon={<WhatshotIcon />} />
        <BottomNavigationAction label="Movies" icon={<MovieIcon />} />
        <BottomNavigationAction label="Tv Series" icon={<TvIcon />} />
        <BottomNavigationAction label="Search" icon={<SearchIcon />} />
      </BottomNavigation>
    </Box>
  );
}
