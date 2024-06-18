import React from 'react'
import {View, Text, Button, StyleSheet} from 'react-native'

type Props = {
  navigation: any
}

export default function HomeStackNavigation({navigation}: Props): JSX.Element {
  return (
    <View style={styles.container}>
      <Text>Movie Page</Text>
      <Button
        title="Pergi ke MovieDetail"
        onPress={() => {
          navigation.navigate('MovieDetail')
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
