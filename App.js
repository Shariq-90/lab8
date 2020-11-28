import React, {useState} from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';


export default function App() {
  const [original_price,set_original_price]=useState();
  const [discount_percentage,set_discount_percentage]=useState();


  return (
      <View style={styles.container}>
        <Text style={styles.header}>Discount Calculator</Text>
        <Text style={styles.text}>Enter your original price:</Text>
        <TextInput placeholder="Original Price" style={styles.input}></TextInput>
        <Text>Enter your discount percentage:</Text>
        <TextInput placeholder="Discount %" style={styles.input}></TextInput>
        <TouchableOpacity style={styles.button}>Calculate</TouchableOpacity>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignContent:"center",
  },
  header: {
    textAlign: "center",
    backgroundColor: "grey",
    padding: 5,
    fontSize: 30,
    fontWeight: "bold",
    fontFamily:"Sanserif",
    marginBottom:50,
    color:"white",
    shadowOpacity:2,

  },
  input: {
    marginTop:5,
    borderWidth: 2,
    width: "50%",
    margin:"auto",
    height:40,
    borderRadius: 12,
    borderColor: "silver",
  },
  button: {
    padding:10,
    textAlign:"center",
    borderRadius:10,
    marginTop:15,
    margin:"auto",
    backgroundColor:"grey",
    width:"50%",
  }
});import React, {useState} from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';


export default function App() {
  const [original_price,set_original_price]=useState();
  const [discount_percentage,set_discount_percentage]=useState();


  return (
      <View style={styles.container}>
        <Text style={styles.header}>Discount Calculator</Text>
        <Text style={styles.text}>Enter your original price:</Text>
        <TextInput placeholder="Original Price" style={styles.input}></TextInput>
        <Text>Enter your discount percentage:</Text>
        <TextInput placeholder="Discount %" style={styles.input}></TextInput>
        <TouchableOpacity style={styles.button}>Calculate</TouchableOpacity>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignContent:"center",
  },
  header: {
    textAlign: "center",
    backgroundColor: "grey",
    padding: 5,
    fontSize: 30,
    fontWeight: "bold",
    fontFamily:"Sanserif",
    marginBottom:50,
    color:"white",
    shadowOpacity:2,

  },
  input: {
    marginTop:5,
    borderWidth: 2,
    width: "50%",
    margin:"auto",
    height:40,
    borderRadius: 12,
    borderColor: "silver",
  },
  button: {
    padding:10,
    textAlign:"center",
    borderRadius:10,
    marginTop:15,
    margin:"auto",
    backgroundColor:"grey",
    width:"50%",
  }
});