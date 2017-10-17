import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Text } from 'react-native'

import styles from './styles'

export default class LastConverted extends Component {
   render() {
      const { base, quote, conversionRate, date } = this.props;

      return (
         <Text style={styles.smallText}>
            1 {base} = {conversionRate} {quote} as of
         </Text>
      );
   }
}

LastConverted.propTypes = {
   date: PropTypes.object,
   base: PropTypes.string,
   quote: PropTypes.string,
   conversionRate: PropTypes.number
}
