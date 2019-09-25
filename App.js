/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
const axios = require('axios').default
const url = 'https://gorest.co.in/public-api/users'
export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: '',
      userName: '',
      dateOfBirth: '',
      email: '',
    }
    
// this.getData()
  }
  componentDidMount(){
    // this.setState({id:'1'})
    axios.get(url, {
      params: { "access-token": "CuTvKofTuFOZj0N6RGDyZVY2mhzowWelO7tz" }
    })
      .then(res=>{
        this.setState({id: res.data.result[0].id})
      })
      .catch(function (error) {
        console.log(error)
      })
    
    
  }

  getData() {
   
  }

  render() {

    return (
      <View>
        <Text>id: {this.state.id}</Text>
        <Text>name: {this.state.userName}</Text>
        <Text>date of birth: {this.state.dateOfBirth}</Text>
        <Text>email: {this.state.email}</Text>
      </View>
    )
  }
}
