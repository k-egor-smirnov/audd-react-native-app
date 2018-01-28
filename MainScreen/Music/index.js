import React from 'react'
import { StyleSheet, Text, TouchableNativeFeedback, Button, Image, View } from 'react-native'
import { BlurView, VibrancyView } from 'react-native-blur'
import styled from 'styled-components/native'

const MusicContainer = styled.View`
  display: flex;
  justifyContent: center;
`

const SongTitle = styled.Text`
  font-family: Roboto;
`

class Music extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      music: this.props.music
    };
  }
  
  render() {
    return (
      <View style={styles.absolute}>
        <MusicContainer>
          <SongTitle>{this.props.music.title || 'null'}</SongTitle>
        </MusicContainer>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0
  },
  absolute: {
    position: "absolute",
    top: 0, left: 0, bottom: 0, right: 0
  },
});

export default Music