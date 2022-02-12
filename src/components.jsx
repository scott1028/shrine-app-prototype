import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import range from 'lodash/range';

const useStyles = makeStyles({
  root: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  menu: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    justifyItems: 'center',
    alignItems: 'center',
    backgroundColor: 'lightyellow',
    height: 125,
  },
  menuItem: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '2px solid grey',
    boxSizing: 'border-box',
  },
  page: {
    top: 0,
    left: 0,
    right: 0,
    position: 'absolute',
    height: 'calc(100vh - 125px)',
    bottom: 125,
    overflowY: 'auto',
  },
});

const Menu = () => {
  const classes = useStyles();
  return (
    <div className={classes.menu}>
      <Link className={classes.menuItem} to="/">神殿</Link>
      <Link className={classes.menuItem} to="/shopping">商城</Link>
      <Link className={classes.menuItem} to="/">功能1</Link>
      <Link className={classes.menuItem} to="/">功能2</Link>
    </div>
  )
}

export default () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <div className={classes.page}>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/shopping">
              <Shopping />
            </Route>
            <Route path="*">
              <Notfound />
            </Route>
          </Switch>
        </div>
        <Menu />
      </Router>
    </div>
  );
}

function Home() {
  return <>
    {range(100).map(key => <h2 key={key}>Home</h2>)}
  </>;
}

function Shopping() {
  return <>
    <h2>Shopping</h2>
  </>
}

function Notfound() {
  return <>
    <h2>Not found</h2>
  </>
}
