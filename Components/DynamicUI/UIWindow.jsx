import { View, Text, StyleSheet,useWindowDimensions,Platform } from "react-native";
export default function UIWindow(){
   const windowWidth=useWindowDimensions().width
   const windowHeight=useWindowDimensions().height
   return(
      <View style={styles.container}>
         <View style={[styles.box,
{               height: windowWidth>500? '70%': '90%',
               width: windowHeight>600? "60%": '90%',}
         ]}>
            <Text style={{fontSize: windowWidth>500 ? 50:24 }}>Welcome</Text>
         </View>
      </View>
   )
}
// const windowWidth=Dimensions.get("window").width;
// const windowHeight=Dimensions.get("window").height;
// console.log({windowHeight,windowWidth});
const styles=StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: 'plum',
      alignItems: 'center',
      justifyContent: 'flex-start',
      marginTop: 200,
      paddingTop: Platform.OS === 'android'?25 : 0

   },
   box:{
      // height: windowWidth>500? '70%': '90%',
      // width: windowHeight>600? "60%": '90%',
      backgroundColor: 'lightblue',
      alignItems: 'center',
      justifyContent: 'center'
   },
   text:{
      ...Platform.select({
         ios: {
            color: 'purple',
            fontSize: 24,
            fontStyle: 'italic'
         },
         android: {
            color: 'blue',
            fontSize: 30
         }
      }),
      fontWeight: 'bold',
      textAlign: 'center',
   }
})

