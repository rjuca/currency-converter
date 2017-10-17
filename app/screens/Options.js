import React, { Component } from 'react';
import { ScrollView, StatusBar, Linking } from 'react-native';

import PropTypes from 'prop-types';

import { ListItem, Separator } from '../components/List';

import { connectAlert } from '../components/Alert';

const ICON_COLOR = '#868686';
const ICON_SIZE = 23;

class Options extends Component {
   static propTypes = {
      alertWithType: PropTypes.func
   };

   handleThemesPress = () => {
      console.log('press theme');
      this.props.navigation.navigate('Themes');
   }

   handleSitePress = () => {
      console.log('press site');
      Linking.openURL('httpasdadad://fixer.io').catch(() => this.props.alertWithType('error', 'Sorry!', 'Fixer cant be opened right now'));
   }

   render() {
      return (
         <ScrollView>
            <StatusBar translucent={false} barStyle="default" />
            <ListItem
               text="Themes"
               onPress={this.handleThemesPress}

            />
            <Separator/>
            <ListItem
               text="Fixer.io"
               onPress={this.handleSitePress}

            />
         </ScrollView>
      );
   }
}

export default connectAlert(Options);
