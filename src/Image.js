import React, { Component } from 'react';
// import { AppRegistry, View, Image } from 'react-native';

class DisplayImage extends Component {
  render() {
    return (
      <View>
        <Image
          source={require('./images/book.gif')}
        />
        <Image
          style={{width: 100, height: 100}}
          source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
        />
      </View>
    );
  }
}