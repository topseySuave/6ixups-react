import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import withStyles from 'material-ui/styles/withStyles';
import Favorite from '@material-ui/icons/Favorite';

import profileImage from '../../assets/img/faces/avatar.jpg';
import NavHeader from '../NavHeader';
import GridContainer from '../../components/Grid/GridContainer';
import GridItem from '../../components/Grid/GridItem';
import headerStyle from '../../assets/jss/material-kit-react/components/headerStyle';

import Card from '../../components/Card/Card';
import CardBody from '../../components/Card/CardBody';
import Info from '../../components/Typography/Info';
import imagesStyles from '../../assets/jss/material-kit-react/imagesStyles';
import { cardTitle, title } from '../../assets/jss/material-kit-react';

import Button from '../../components/CustomButtons/Button';

const style = {
  ...imagesStyles,
  cardTitle,
  textMuted: {
    color: '#6c757d'
  },
  fav: {
    height: '40px',
    width: '40px'
  }
};

// <p>
//   <Link to="/u/UiejdeiowUIHiw">
//     <img
//       src={profileImage}
//       alt="profile"
//       className={`${classes.imgDp} ${classes.imgRoundedCircle} ${classes.imgFluid}`
//       }
//     />
//     Gabriel Micah - {' '}
//     <small className={classes.textMuted}>
//       3 min ago
//     </small>
//   </Link>
// </p>

class LandingPage extends Component {
  render() {
    let { classes } = this.props;
    return (
      <React.Fragment>
        <NavHeader
          profileImage={profileImage}
        />
        <div style={headerStyle.containerReact}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={2} xlg={3} />
            <GridItem xs={12} sm={12} md={8} xlg={7}>
              <GridContainer>
                <GridItem xs={12} sm={12} md={8}>
                  {
                    ['', '', '', '', '', ''].map((item, index) => (
                      <GridItem key={`${index}-${item}`} xs={12} sm={12}>
                        <Card>
                          <Link to="/6ix/dsOIs32weAjs">
                            <img className={classes.imgCardBottom} src={profileImage} alt="Card-img-cap" />
                          </Link>
                          <CardBody>
                            <h4 className={classes.cardTitle}>
                              <Link to="/6ix/dsOIs32weAjs">
                                <span style={{ ...title, fontSize: '1.2em' }}>
                                  Meme of the day
                                </span>
                              </Link>
                            </h4>
                            <span>
                              <Button justIcon round color="none">
                                <Favorite style={{ fontSize: '20px', color: '#FFFFFF' }} />
                              </Button>
                              <Button round color="facebook">
                                <i className="fab fa-facebook" />
                                {'. '} facebook
                              </Button>
                              <Button round color="twitter">
                                <i className="fab fa-twitter" />
                                {'. '} twitter
                              </Button>
                            </span>
                          </CardBody>
                        </Card>
                      </GridItem>)
                    )
                  }
                </GridItem>
                <GridItem xs={12} sm={12} md={4} xlg={3}>
                  <Card>
                    <img className={classes.imgCardBottom} src={profileImage} alt="Card-img-cap" />
                  </Card>
                </GridItem>
              </GridContainer>
            </GridItem>
            <GridItem xs={12} sm={12} md={2} />
          </GridContainer>
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(style)(LandingPage);
