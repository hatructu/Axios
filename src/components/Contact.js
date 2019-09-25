import React, { Component } from 'react';
import {
  TouchableWithoutFeedback,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { SearchBar } from 'react-native-elements/'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class Contacts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchText: ''
    }
  }
  render() {
    return (
      <TouchableWithoutFeedback>
        <View>
          <SearchBar
            placeholder='Search'
            onChangeText={(text) => this.setState({ searchText: text })}
            searchIcon={<Icon name='search' size={30} color='white' />}

          />
          <Icon name='search' size={30} color='white' />
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
})