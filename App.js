import React from 'react'
import { Alert, Image, SectionList, StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native'

export default class App extends React.Component {
  _onPressButton() {
    Alert.alert('You tapped the button!')
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.searchInput}
          placeholder='Type a city name...'
        />
        <TouchableHighlight style={styles.button} onPress={this._onPressButton}>
          <Text style={styles.buttonText}>Search Shows</Text>
        </TouchableHighlight>
        <SectionList
          sections={showsByStatus}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.status.toUpperCase()}</Text>}
          renderItem={({item}) => (
            <View style={styles.showItem}>
              <Image style={styles.showThumbnail} source={{uri: item.thumbnail}} />
              <Text style={styles.showName}>{item.name}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'stretch',
    padding: 10,
    paddingTop: 30
  },
  searchInput: {
    height: 50,
    textAlign: 'center'
  },
  button: {
    marginBottom: 20,
    alignItems: 'center',
    backgroundColor: '#6E1FFF'
  },
  buttonText: {
    padding: 10,
    color: 'white'
  },
  sectionHeader: {
    paddingVertical: 10,
    fontWeight: 'bold'
  },
  showItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  showThumbnail: {
    height: 50,
    flexBasis: 75,
    marginRight: 10
  },
  showName: {
    flex: 1,
    fontStyle: 'italic'
  }
})

const showsByStatus = [
  {
    status: 'Running',
    data: [
      {id: '4ea19ee97bab1a0001001908', name: 'Avenue des Gobelins', thumbnail: 'https://d32dm0rphc51dk.cloudfront.net/Bzp0BLipfnPU1hd6DHyHJw/medium.jpg'},
      {id: '4ea1a39693dc8b00010029dc', name: 'Simon Norfolk: Burke + Norfolk', thumbnail: 'https://d32dm0rphc51dk.cloudfront.net/kIew056VlO6W6CJlf4zG0Q/medium.jpg'}
    ]
  },
  {
    status: 'Upcoming',
    data: [
      {id: '4ea1a42b7bab1a0001001ed7', name: 'Lavoro', thumbnail: 'https://d32dm0rphc51dk.cloudfront.net/_3f3bVkljSSDQOOhp84j_Q/medium.jpg'},
      {id: '4ea1b7f87bab1a000100298b', name: 'In Between (Part II): So Far', thumbnail: 'https://d32dm0rphc51dk.cloudfront.net/um0uqVL9hQHpg4PYDmVbSw/medium.jpg'},
      {id: '4ea1e81bb5482b000100437c', name: 'I Made You To Find Me', thumbnail: 'https://d32dm0rphc51dk.cloudfront.net/OeQ4PYS2LNRK7nDcASR5sg/medium.jpg'},
      {id: '4ea1eb69b5482b0001004d58', name: 'Jaume Plensa: One Thought Fills Immensity', thumbnail: 'https://d32dm0rphc51dk.cloudfront.net/dAZOB_1SfQ-aEPx4OZLksQ/medium.jpg'},
      {id: '4ea1ebf5f65bb90001004df8', name: 'Papers and Concrete: Modern Architecture in Korea 1987–1997', thumbnail: 'https://d32dm0rphc51dk.cloudfront.net/UnF9m1wQir8LqxaNRejqlA/medium.jpg'}
    ]
  },
  {
    status: 'Closed',
    data: [
      {id: '4ea1ece847493600010048f8', name: 'Claudia Hart: When A Rose is Not A Rose', thumbnail: 'https://d32dm0rphc51dk.cloudfront.net/xlzbXNL2GISqDBHqtEN7Mw/medium.jpg'}
    ]
  }
]
