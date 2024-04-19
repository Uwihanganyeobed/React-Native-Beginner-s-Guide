import { View, Text, StyleSheet } from "react-native";
export default function Box({children, style}){
   return(
      <View style={[styles.box, style]}>
         <Text style={styles.text}>{children}</Text>
      </View>
   )
}
const styles=StyleSheet.create({
   box: {
      backgroundColor:'#fff',
      padding: 20,
      width: 100,
      height: 100,
      // flexGrow: 1
   },
   text:{
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      color: 'white'
   },
})


// const styles=StyleSheet.create({
//    container: {
//      flex: 1,
//      // height: 300,
//      // flexGrow: 1,
//      // flexWrap: 'wrap',
//      // rowGap: 20,
//      // columnGap: 30,
//      // gap: 20,
//      // alignContent: 'space-around' ,
//      marginTop: 30,
//      borderWidth: 6,
//      // flexDirection: 'row',
//      // justifyContent: "flex-end",
//      // alignItems: 'baseline',
//      borderColor: 'lightblue'
//    }
//  })
 