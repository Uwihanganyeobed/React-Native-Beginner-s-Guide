import { View, Text, StyleSheet } from "react-native"
export default function StyleSheetAPI(){
  return (
    <View style={styles.container}>
      <View>
      <Text style= {[ styles.Box,styles.lightblueBox]}>Light Blue API</Text>
      </View>
      <Text style= {[styles.Box,styles.lightgreenBox]}>Light Green API</Text>
    </View>
  )
}

const styles=StyleSheet.create({
   container: {flex: 1, backgroundColor: "plum", padding: 60},
   title: {color: 'green', fontWeight: 'bold'},
   Box: {
      width: 100,
      height: 100,
      // padding: 10,
      paddingHorizontal: 10,
      paddingVertical: 10,
      marginVertical: 20,
      borderWidth: 2,
      borderColor: "purple",
      borderRadius: 5
   },
   lightblueBox: {
      backgroundColor: "lightblue",
   },
   lightgreenBox: {
      backgroundColor: "lightgreen",
   }
})