import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, View, Text, Image } from 'react-native'

import styles from './styles'

export default class ClearButton extends Component {
   render() {
      const { text, onPress } = this.props;

      return (
         <TouchableOpacity style={styles.container} onPress={onPress}>
            <View style={styles.wrapper}>
               <Image resizeMode="contain" style={styles.icon} source={require('./images/icon.png')}/>
               <Text style={styles.text}>{text}</Text>
            </View>
         </TouchableOpacity>
      );
   }
}

ClearButton.propTypes = {
   text: PropTypes.string,
   onPress: PropTypes.func
}
