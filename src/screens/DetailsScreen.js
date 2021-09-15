import React, {useEffect,useState} from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native';
import {View, Text, StyleSheet,Image } from 'react-native';
import { Card, ListItem, Button, Icon,Rating } from 'react-native-elements'



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
          {
            
              <Card>
                <Card.Title>{(movieDetails == null ? "" : movieDetails.Title)} (
                  {(movieDetails == null ? "" : movieDetails.Released)}
                )</Card.Title>
                <Card.Divider/>
                  <View>
                    <Image
                      style={{
                        margin:'auto',
                        width:300,
                        height:350,
                        marginLeft:'auto',
                        marginRight: 'auto'
                      }}
                      resizeMode="stretch"
                      source={{uri:(movieDetails == null ? "" : movieDetails.Poster)}}
                    />
                    <Card.Divider/>
                      <Text style={{fontWeight:'bold'}}>Plot</Text>
                    <Card.Divider/>
                    <Text>{(movieDetails == null ? "" : movieDetails.Plot)}</Text>
                    <Card.Divider/>
                      <Text style={{fontWeight:'bold'}}>Director</Text>
                    <Card.Divider/>
                    <Text>{(movieDetails == null ? "" : movieDetails.Director)}</Text>
                    <Card.Divider/>
                      <Text 
                      style={{
                        fontWeight:'bold'
                        }}>

                         IMDB rating
                         <Icon
                          name='star'
                          type='evilicon'
                          color='#517fa4'
                         />
                      </Text>
                      
                      
                    <Card.Divider/>
                    <Rating showRating   imageSize={30} ratingCount={10} fractions="{1}" startingValue={(movieDetails == null ? 0 : movieDetails.imdbRating)} />
                  </View>
              </Card>
          }
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