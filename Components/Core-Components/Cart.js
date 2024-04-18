import { View, Text, Button,Modal,Alert } from "react-native";
export default function Cart({count}){

   return(
      <View>
         <Button title="Test Cart Amount" onPress={()=>Alert.alert("This is the cart amount",`${count}`,[{
            text: 'Increment',
            onPress: ()=>alert("User Incremented it!")
         },
      {
         text: 'Decrement',
         onPress: ()=>alert("User decremented it!")
      },
      {
         text: 'Reset',
         onPress: ()=>alert("User Confirmed it!")
      }
      ])}/>
      </View>
   )
}