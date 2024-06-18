import React from 'react'
import {View, Text, Button, StyleSheet} from 'react-native'

type Props = {
  navigation: any
}

export default function MovieDetail({navigation}: Props): JSX.Element {
  return (
    <View style={styles.container}>
      <Text>Movie Detail Page</Text>
      <Button
        title="Kembali"
        onPress={() => {
          navigation.goBack()
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
