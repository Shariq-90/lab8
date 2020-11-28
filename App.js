import React, {useState} from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';


export default function App() {
  const [original_price,set_original_price]=useState();
  const [discount_percentage,set_discount_percentage]=useState();
  const [save_price,set_save_price]=useState();
  const [final_price,set_final_price]=useState();
  const history=[];


  const resultHandler = () => {
    if(original_price>0 && original_price != ""){
      if(discount_percentage>0 && discount_percentage <=100){
        set_save_price(original_price*(discount_percentage/100).toFixed(2))
        set_final_price(original_price - original_price*(discount_percentage/100).toFixed(2))
      }
      else{
        alert("Discount can't be less than 0 and greater than 100")
      }
    }
    else{
      alert("Price can't be in negative numbers")
    }
  }
  return (
      <View style={styles.container}>
        <Text style={styles.header}>Discount Calculator</Text>
        <Text style={styles.text}>Enter your original price:</Text>
        <TextInput placeholder="Original Price" style={styles.input}
                   onChange={(e) => set_original_price(e.target.value)}></TextInput>
        <Text>Enter your discount percentage:</Text>
        <TextInput placeholder="Discount %" style={styles.input}
                   onChange={(e) => set_discount_percentage(e.target.value)}></TextInput>
        <TouchableOpacity style={styles.button} onPress={resultHandler}>Calculate</TouchableOpacity>
        <Text style={styles.result}>You Saved:{save_price}</Text>
        <Text style={styles.result}>Final Price:{final_price}</Text>
        <TouchableOpacity style={styles.button} onPress={resultHandler}>Save It</TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={resultHandler}>History</TouchableOpacity>
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
    fontFamily:"Sanserif",

  },
  button: {
    padding:10,
    textAlign:"center",
    borderRadius:10,
    marginTop:15,
    margin:"auto",
    backgroundColor:"grey",
    width:"50%",
    marginBottom:5,
    fontFamily:"Sanserif",
    shadowOpacity:2,
    color:"white",
  },
  result:{
    // margin:"auto",
    padding:5,
    marginBottom:5,
    backgroundColor:"grey",
    fontSize:20,
    fontFamily:"Sanserif",
    fontWeight:"bold",
    color:"white",

  }
});