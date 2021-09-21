
import React, {useEffect,useState} from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native';
import {View, Text, StyleSheet,Image } from 'react-native';
import { Card, ListItem, Button, Icon,Rating } from 'react-native-elements'
import MovieCard from '../components/MovieCard';



const DetailsScreen = ({navigation, route}) => {
  const [movieDetails,setMovieDetails] = useState(null);
  const { name, year } = route.params;

  const treatName = (str) => {
    var newStr = str.replace(" ","+");
    return newStr;
  }

 
  
  const arr = [1,2,3];
  useEffect(() =>{
    const xhr = new XMLHttpRequest();
    xhr.open('GET',"http://www.omdbapi.com/?apikey=b8d4d62e&t=" + treatName(name) + "&y="+ year);
    xhr.send();
    
    xhr.onload = () => {
      if(xhr.status == 200){
        var response = JSON.parse(xhr.response);
        setMovieDetails(response);
      }else{
        console.log("something went wrong")
      }
    }
  }, []);
    
    return (
     
      <View style={styles.mainView}>
        <SafeAreaView>
          <ScrollView>

            <MovieCard movieDetails={movieDetails}/>

          </ScrollView>
        </SafeAreaView>
      </View>
    
      
    )
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  }
});

export default DetailsScreen;