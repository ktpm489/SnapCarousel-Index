/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
  PixelRatio,
  ScrollView,
  TouchableOpacity,
  ActivityIndicatorIOS,
  ListView,
  Dimensions,
  Modal
} from 'react-native';
// import Icon from ('react-native-vector-icons/Ionicons')
import Icon from 'react-native-vector-icons/Ionicons'
var screen = Dimensions.get('window')
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
const imgLink = require('./img/AuthorAvatar.png')

export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1 ,backgroundColor : 'white'}}>
     {/*    <TouchableHighlight 
          
          underlayColor={"#333"}
          activeOpacity={0.95}> */}
         {/*  <View style={styles.headerContent}>
            <Image source={imgLink}
              style={styles.playerAvatar} />
            <Text style={styles.shotTitle}>Title</Text>
            <Text style={styles.playerContent}>by <Text style={styles.player}>{'AAAAA'}</Text></Text>
          </View> */}
       {/*  </TouchableHighlight> */}
        <View style={styles.mainSection}>
          <View style={styles.shotDetailsRow}>
            <View style={styles.shotCounter}>
              <Icon name="ios-alert-outline" size={24} color="#333" /> 
              <Text style={styles.shotCounterText}> A1 </Text>
            </View>
            <View style={styles.shotCounter}>
              <Icon name="ios-alert-outline" size={24} color="#333" />
              <Text style={styles.shotCounterText}> A2 </Text>
            </View>
             <View style={styles.shotCounter}>
              <Icon name="ios-alert-outline" size={24} color="#333" />
              <Text style={styles.shotCounterText}> A3 </Text>
            </View> 
          </View>
          <View style={styles.separator} />
          <Text>
           {/*  <HTML value={this.props.shot.description}
              stylesheet={styles} /> */}
              {'A4'}
          </Text>
        {/*   <View>
            {this.state.dataSource.getRowCount() === 0 ?
              <Loading /> :
              this._renderCommentsList()}
          </View> */}
        </View>
        <View style={styles.headerContent}>
          <Image source={imgLink}
            style={styles.playerAvatar} />
          <Text style={styles.shotTitle}>Title</Text>
          <Text style={styles.playerContent}>by <Text style={styles.player}>{'AAAAA'}</Text></Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  spinner: {
    marginTop: 20,
    width: 50
  },
  a: {
    fontWeight: "300",
    color: "#ea4c89"
  },
  p: {
    marginBottom: 0,
    flexDirection: "row",
    marginTop: 0,
  },
  invisibleView: {
    flex: 1,
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },
  customModalImage: {
    height: screen.height / 2
  },
  headerContent: {
    flex: 1,
    paddingBottom: 20,
    paddingTop: 40,
    alignItems: "center",
    width: screen.width,
    backgroundColor: "red"
  },
  shotTitle: {
    fontSize: 16,
    fontWeight: "400",
    color: "#ea4c89",
    lineHeight: 18
  },
  playerContent: {
    fontSize: 12
  },
  player: {
    fontWeight: "900",
    lineHeight: 18
  },
  playerAvatar: {
    borderRadius: 40,
    width: 80,
    height: 80,
    position: "absolute",
    top: 60,
    left: screen.width / 2 - 40,
    borderWidth: 2,
    borderColor: "#fff"
  },
  rightPane: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center"
  },
  shotDetailsRow: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    flexDirection: "row"
  },
  shotCounter: {
    flex: 2,
    alignItems: "center",
    justifyContent: "space-between"
  },
  shotCounterText: {
    color: "#333"
  },
  mainSection: {
    flex: 1,
    alignItems: "stretch",
    padding: 10,
    backgroundColor: "white"
  },
  separator: {
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    height: 1 / PixelRatio.get(),
    marginVertical: 10,
  },
  sectionSpacing: {
    marginTop: 20
  },
  heading: {
    fontWeight: "700",
    fontSize: 16
  }
});
