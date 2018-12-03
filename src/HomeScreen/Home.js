// HomeScreen.js
import React from 'react'
import {
  StyleSheet,
  Platform,
  Image,
  Text,
  View
} from 'react-native'
export default class HomeScreen extends React.Component {

  render() {
    // const {
    //   user
    // } = this.props.naviagtion.state.params
    console.log(this.state)
    const {
      currentUser
    } = this.state
    console.log(currentUser)
    return (
      <View style={styles.container} >
        <Text>Hi {currentUser && currentUser.email}!</Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
