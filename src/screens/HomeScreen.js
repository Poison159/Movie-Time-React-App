import React, {useEffect,useState} from 'react';
import { Button, View, Text, StyleSheet,TextInput,ImageBackground } from 'react-native';



const HomeScreen = ({navigation, route}) => {
    console.log(route);
    const image = { uri: "https://s3-us-west-2.amazonaws.com/flx-editorial-wordpress/wp-content/uploads/2018/03/13153742/RT_300EssentialMovies_700X250.jpg" };
    const [movieName,setName] = useState('');
    const [movieYear,setYear] = useState(null);
    
    return (
      <View style={styles.mainView}>
        <ImageBackground source={image} resizeMode="stretch" style={styles.image}>
          <Text style={styles.text}>
            Movie Search
          </Text>
        </ImageBackground>
        <TextInput
          placeholder='Movie Title'
          onChangeText ={movieName => setName(movieName)}
          defaultValue={movieName}
        />
        <Text></Text>
        <TextInput
          placeholder='Movie Year'
          onChangeText ={movieYear => setYear(movieYear)}
          defaultValue={movieYear}
        />
        <Text></Text>
          <Button
            title="Search Movie"
            onPress={() => {navigation.navigate("Details", {name:movieName,year: movieYear ? parseInt(movieYear) : null})}}/>
            
      </View>
    )
};


const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: "center",
    
  },

  container: {
    flex: 1,
  },
  image: {
    width:'100%',
    height:'50%'
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0"
  }
});

export default HomeScreen;