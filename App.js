import { useState } from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  Button,
  Pressable,
  Modal,
  StatusBar,
  ActivityIndicator,
  Alert,
  StyleSheet
} from "react-native";
import Cart from "./Components/Core-Components/Cart";
import Box from "./Components/RNLayout/Box";
import Greet from "./Components/Core-Components/Greet";
import StyleSheetAPI from "./Components/styleSheetAPI/StyleSheetAPI";
const logoImage = require("./assets/adaptive-icon.png");
export default function App() {
  const [count, setCount]=useState(0)
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    // <View style={{backgroundColor: 'plum', flex: 1}}></View>
    <View style={styles.container}>
    <Box style={{backgroundColor: 'red', flex: 1}}>Box 1</Box>
    <Box style={{backgroundColor: 'orange', flex: 3}}>Box 2</Box>
    <Box style={{backgroundColor: 'yellow'}}>Box 3</Box>
    <Box style={{backgroundColor: 'green'}}>Box 4</Box>
    <Box style={{backgroundColor: 'blue'}}>Box 5</Box>
    <Box style={{backgroundColor: 'indigo'}}>Box 6</Box>
    <Box style={{backgroundColor: 'violet'}}>Box 7</Box>
    <Box style={{backgroundColor: 'orangered'}}>Box 8</Box>
    </View>
    // <StyleSheetAPI/>
  );
}
const styles=StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    borderWidth: 6,
    borderColor: 'lightblue'
  }
})




{
  /* <ScrollView>
<Button
    title="Press"
    onPress={() => alert("Button Pressed success")}
    color="midnightblue"
    // disabled
  />
  <Pressable onPress={()=>alert('Image pressed')}>
  <Image source={logoImage} style={{ width: 300, height: 300 }} />
  </Pressable>
  <Pressable onPress={()=>alert('Text pressed')}>
  <Text>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
    fugiat unde maxime sit magnam dicta error nobis nihil qui esse
    placeat, recusandae nemo amet alias. Asperiores quibusdam quam
    dignissimos ab. Lorem ipsum dolor sit amet consectetur adipisicing
    elit. Aperiam fugiat unde maxime sit magnam dicta error nobis nihil
    qui esse placeat, recusandae nemo amet alias. Asperiores quibusdam
    quam dignissimos ab.
  </Text>
  <Image source={logoImage} style={{ width: 300, height: 300 }} />
  </Pressable>

</ScrollView> */
}

{
  /* <Button
title="Press"
onPress={() => setIsModalVisible(true)}
color="midnightblue"
/>
<Modal
visible={isModalVisible}
onRequestClose={() => setIsModalVisible(false)}
animationType="slide"
presentationStyle="pageSheet"
>
<View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
  <Text>Modal Content</Text>
  <Button
    title="Close"
    color="red"
    onPress={() => setIsModalVisible(false)}
  />
</View>
</Modal> */
}

    // <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
    //   <Greet name='Vargas'/>
    //   <Greet name='Obed'/>
    //   <View>
    //     <Cart count={count}/>
    //     <Button title="Increment Cart" onPress={()=>setCount(count+1)}  />
    //     <Button title="Decrement Cart" onPress={()=>count>0 && setCount(count-1)} />
    //     <Button title="Reset Cart" onPress={()=>setCount(0)} />
    //   </View>
    // </View>