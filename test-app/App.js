import React from 'react'
import { StyleSheet, View } from 'react-native'

import QR from './QR.js'

export default class App extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <QR />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
