import React from 'react'
import { StyleSheet, Text, TouchableOpacity, Button, Image, View } from 'react-native';
import fs from 'react-native-fs'
import { AudioRecorder, AudioUtils } from 'react-native-audio';
import fetch from 'react-native-fetch-blob'
import Music from '../Music'

let audioPath = AudioUtils.DocumentDirectoryPath + '/voice.mp3'; 

class RecordButton extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      music: {},
      text: "Lorem ipsum",
      record: false,
      mode: 0
    }
  }

  render() {
    return (
      <View>
        <TouchableOpacity
          style={this.state.record ? styles.voiceButtonActive : styles.voiceButton} 
          activeOpacity={0.6} 
          onPress={ () => this.startRecord()}
        >
          <Image 
            source={this.state.mode === 0 ? require('./music.png') : require('./mic.png') }
            style={{width: 128, height: 128}}
          />
        </TouchableOpacity>

        <Music
          // style={{
          //   display: this.state.music ? 'flex' : 'none'
          // }}
          music={this.state.music}
        />

      </View>
    )
 }

 async startRecord () {
    AudioRecorder.prepareRecordingAtPath(audioPath, {
      SampleRate: 44100,
      Channels: 1,
      AudioQuality: "Low",
      AudioEncoding: "mp3"
    });

    
    AudioRecorder.startRecording();

    this.setState({
      record: true
    })

    let files = await fs.readdir(AudioUtils.DocumentDirectoryPath)

    setTimeout(async function () {
      AudioRecorder.stopRecording()

      this.setState({
        record: false
      })

      let form = new FormData()

      form.append('audio', await fs.readFile(audioPath, 'base64'));
      form.append('api_token', 'd455862c59fb1771033a5e28b5622d47')
      form.append('return_itunes_audios', true),
      form.append('return_lyrics', true)

      let request = new XMLHttpRequest()
      
      request.open("POST", 'https://api.audd.io/')
      request.send(form)

      let self = this;

      request.onreadystatechange = function() {
        if (request.readyState === 4) {
          self.setState({
            text: request.response
          })

          let res = JSON.parse(request.response)

          console.log(res)

          if (res.result == null) return

          console.log(res.result)

          self.setState({
            music: res.result
          })
        }
      }

    }.bind(this), 5000)
  }
}


const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: 'rgba(100,0,0,1)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
    backgroundColor: '#fff',
    borderRadius: 100
  },
  voiceButton: {
    backgroundColor: '#2196F3',
    borderRadius: 100
  },
  voiceButtonActive: {
    backgroundColor: 'white',
    borderRadius: 100
  }
})

export default RecordButton