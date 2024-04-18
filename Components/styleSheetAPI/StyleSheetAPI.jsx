import { View, Text, StyleSheet } from "react-native"
export default function StyleSheetAPI(){
  return (
    <View style={styles.container}>
      <Text style= {styles.title}>StyleSheet API</Text>
    </View>
  )
}

const styles=StyleSheet.create({
   container: {flex: 1, backgroundColor: "plum", padding: 60},
   title: {color: 'green', fontWeight: 'bold'}
})