import React, { Component } from 'react';
import { ScrollView, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';

import { ListItem, Separator } from '../components/List';

import { changePrimaryColor } from '../actions/theme';

// Doing this because we can't access global stylesheet variables in here
const styles = EStyleSheet.create({
   $blue: '$primaryBlue',
   $green: '$primaryGreen',
   $orange:'$primaryOrange',
   $purple:'$primaryPurple'
});

class Themes extends Component {
   handleThemePress = ( color ) => {
      this.props.dispatch(changePrimaryColor(color));
      this.props.navigation.goBack();
   }

   render() {
      return (
         <ScrollView>
            <StatusBar translucent={false} barStyle="default" />
            <ListItem text="Blue" onPress={() => this.handleThemePress(styles.$blue)} selected checkmark={false} iconBackground={styles.$blue}/>
            <Separator/>
            <ListItem text="Orange" onPress={() => this.handleThemePress(styles.$orange)} selected checkmark={false} iconBackground={styles.$orange} />
            <Separator/>
            <ListItem text="Green" onPress={() => this.handleThemePress(styles.$green)} selected checkmark={false} iconBackground={styles.$green} />
            <Separator/>
            <ListItem text="Purple" onPress={() => this.handleThemePress(styles.$purple)} selected checkmark={false} iconBackground={styles.$purple} />
            <Separator/>
         </ScrollView>
      );
   }
}

export default connect()(Themes);
