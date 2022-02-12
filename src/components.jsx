import React, { useState, useMemo, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from 'react-router-dom';

import { makeStyles } from '@mui/styles';

import pose1 from './assets/pose-1.jpg';
import pose2 from './assets/pose-2.jpg';
// import pose3 from './assets/pose-3.png';
import calendar from './assets/calendar.jpg';
// import template1 from './assets/temple-1.jpg';
// import template2 from './assets/temple-2.jpg';
import astroHome from './assets/astro-home.jpg';
import astro1 from './assets/astro-1.jpg';
import astro1menu from './assets/astro-1-menu.jpg';
import astro1details from './assets/astro-1-details.jpg';
import templeOldOutside from './assets/temple-old-outside.jpg';
import templeOldInside from './assets/temple-old-inside.jpg';
import templeNewOutside from './assets/temple-new-outside.jpg';
import templeNewInside from './assets/temple-new-inside.jpg';

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
  poseImageWrapper: {
    // height: '100%',
    width: 0,
    height: 0,
    transition: 'width .5s, height .5s',
  },
  postImageWrapperLarge: {
    width: '100%',
    height: '100%',
  },
  poseImage: {
    height: 300,
    width: '100%',
    objectFit: 'contain',
    position: 'relative',
    top: 100,
  },
  poseImageInTemple: {
    width: 100,
    height: 300,
    objectFit: 'contain',
    position: 'absolute',
    top: 145,
    left: 0,
    marginLeft: '50%',
    transform: 'translateX(-50%)',
  },
  templeImage: {
    height: 450,
    width: '100%',
    objectFit: 'contain',
    position: 'relative',
    top: 75,
  },
  astroImage: {
    // height: '100%',
    width: '100%',
    objectFit: 'contain',
    position: 'relative',
  },
  astroMenuImage: {
    width: '100%',
    objectFit: 'contain',
  },
  advertisement: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: 50,
    bottom: 125,
    backgroundColor: 'rgba(0, 255, 255, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  demoButton1: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  demoButton2: {
    position: 'absolute',
    top: 35,
    right: 0,
  },
  demoButton3: {
    position: 'absolute',
    top: 255,
    right: 25,
  },
  calendar: {
    objectFit: 'contain',
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    zIndex: -1,
  },
});

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
            <Route path="/astro" exact>
              <Astro />
            </Route>
            <Route path="/astro/lion">
              <AstroLion />
            </Route>
            <Route path="/shopping">
              <Shopping />
            </Route>
            <Route path="/temple">
              <Temple />
            </Route>
            <Route path="*">
              <Notfound />
            </Route>
          </Switch>
        </div>
        <Advertisement />
        <Menu />
      </Router>
    </div>
  );
}

const Advertisement = () => {
  const classes = useStyles();
  const [isAdDisplayed, setIsAdDisplayed] = useState(true);
  return isAdDisplayed && (
    <>
      <div className={classes.advertisement}>
        廣告區域
        <div style={{ position: 'absolute', right: 5, top: 5, cursor: 'pointer', color: 'blue' }} onClick={() => setIsAdDisplayed(false)}>X</div>
      </div>
    </>
  )
};

const Menu = () => {
  const classes = useStyles();
  return (
    <div className={classes.menu}>
      <Link className={classes.menuItem} to="/">日曆</Link>
      <Link className={classes.menuItem} to="/astro">星座運勢</Link>
      <Link className={classes.menuItem} to="/temple">神殿</Link>
      <Link className={classes.menuItem} to="/shopping">商城</Link>
    </div>
  )
}

function Home() {
  const classes = useStyles();
  const [currentPose, setCurrentPose] = useState(pose1);
  const [isShowed, setIsShow] = useState(false);
  const [exCls, setExCls] = useState(false);
  useEffect(() => {
    const t1 = setTimeout(() => {
      setIsShow(true);
    }, 250);
    const t2 = setTimeout(() => {
      setExCls(true);
    }, 500);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [setExCls, setIsShow]);
  return <>
    <img className={classes.calendar} src={calendar} />
    { isShowed && <div className={`${classes.poseImageWrapper} ${exCls ? classes.postImageWrapperLarge : ''}`}>
      <img className={classes.poseImage} src={currentPose} onClick={() => setIsShow(false)} />
    </div>
    }
    <button className={classes.demoButton1} onClick={() => setCurrentPose((prevState) => prevState === pose1 ? pose2 : pose1)}>祈禱</button>
  </>;
}

function Temple() {
  const classes = useStyles();
  const [currentTemple, setCurrentTemple] = useState(templeOldOutside);
  const [isDoorOpened, openDoor] = useState(false);
  const [isUpgraded, upgrade] = useState(false);
  const templeImage = useMemo(() => {
    if (!isDoorOpened && !isUpgraded) {
      return templeOldOutside;
    } else if (isDoorOpened && !isUpgraded) {
      return templeOldInside;
    } else if (!isDoorOpened && isUpgraded) {
      return templeNewOutside;
    } else if (isDoorOpened && isUpgraded) {
      return templeNewInside;
    }
  }, [isDoorOpened, isUpgraded]);
  return <>
    <img className={classes.templeImage} src={templeImage} />
    { isDoorOpened && <img className={classes.poseImageInTemple} src={pose1} /> }
    <button className={classes.demoButton1} onClick={() => upgrade(prevState => !prevState)}>升級神殿</button>
    <button className={classes.demoButton2} onClick={() => openDoor(prevState => !prevState)}>開門*N</button>
  </>
}

function Astro() {
  const classes = useStyles();
  const history = useHistory();
  return <>
    <img style={{ height: '100%' }} className={classes.astroImage} src={astroHome} />
    <button className={classes.demoButton3} onClick={() => history.push('/astro/lion')}>點擊</button>
  </>
}

function AstroLion() {
  const classes = useStyles();
  return <>
    <div className={`${classes.poseImageWrapper} ${classes.postImageWrapperLarge}`}>
      <img className={classes.astroImage} src={astro1} />
      <img className={classes.astroMenuImage} src={astro1menu} />
      <img className={classes.astroMenuImage} src={astro1details} />
    </div>
    <button className={classes.demoButton1} onClick={() => history.back()}>上一頁</button>
  </>
}

function Shopping() {
  return <>
    <h2>Shopping</h2>
  </>
}

function Calendar() {
  return <>
    <h2>Calendar</h2>
    <img src={calendar} />
  </>
}

function Notfound() {
  return <>
    <h2>Not found</h2>
  </>
}
