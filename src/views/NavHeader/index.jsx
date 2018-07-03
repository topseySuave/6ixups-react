import React from 'react';
import { Link } from 'react-router-dom';

// material-ui components
import withStyles from 'material-ui/styles/withStyles';
import List from 'material-ui/List';
import ListItem from 'material-ui/List/ListItem';
import Email from '@material-ui/icons/Email';
import Notification from '@material-ui/icons/Notifications';
import GridContainer from '../../components/Grid/GridContainer.jsx';
import GridItem from '../../components/Grid/GridItem.jsx';
import Header from '../../components/Header/Header.jsx';
import CustomInput from '../../components/CustomInput/CustomInput.jsx';
import IconButton from '../../components/CustomButtons/IconButton.jsx';
import CustomDropdown from '../../components/CustomDropdown/CustomDropdown.jsx';
import Button from '../../components/CustomButtons/Button.jsx';

import navbarsStyle from '../../assets/jss/material-kit-react/views/componentsSections/navbarsStyle.jsx';

class NavHeader extends React.Component {
  render() {
    const { classes, profileImage } = this.props;
    return (
      <Header
        brand="6ixups"
        color="seaGreen"
        fixed
        rightLinks={
          <List className={classes.list}>
            <ListItem className={classes.listItem}>
              <Button
                href="#pablo"
                className={classes.navLink}
                onClick={e => e.preventDefault()}
                color="transparent"
              >
                      Discover
              </Button>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Button
                href="#pablo"
                className={classes.navLink}
                onClick={e => e.preventDefault()}
                color="transparent"
              >
                      Wishlist
              </Button>
            </ListItem>
            <ListItem className={classes.listItem}>
              <IconButton
                href="#pablo"
                className={classes.notificationNavLink}
                onClick={e => e.preventDefault()}
                color="transparent"
              >
                <Notification />
              </IconButton>
            </ListItem>
            <ListItem className={classes.listItem}>
              <CustomDropdown
                left
                caret={false}
                hoverColor="primary"
                dropdownHeader="User List"
                buttonText={
                  <img
                    src={profileImage}
                    className={classes.img}
                    alt="profile"
                  />
                }
                buttonProps={{
                  className:
                          `${classes.navLink} ${classes.imageDropdownButton}`,
                  color: 'transparent'
                }}
                dropdownList={[
                  <Link to="/u/me" className={classes.listItem}>Me</Link>,
                  'Settings and other stuff',
                  'Sign out'
                ]}
              />
            </ListItem>
          </List>
        }
      />
    );
  }
}

export default withStyles(navbarsStyle)(NavHeader);
