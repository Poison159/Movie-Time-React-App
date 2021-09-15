import React, {useEffect,useState} from 'react';
import {View, Text, StyleSheet,Image,ImageBackground } from 'react-native';
import { Card, ListItem, Button, Icon,Rating } from 'react-native-elements';

import { Row, Col } from 'react-native-responsive-grid-system';
 



const LandingScreen = ({navigation}) => {
    const image = { uri: "https://s3-us-west-2.amazonaws.com/flx-editorial-wordpress/wp-content/uploads/2018/03/13153742/RT_300EssentialMovies_700X250.jpg" };

    return(
        <View>
            
            <Card>
                <Card.Title>
                    Sign in or Sign up
                </Card.Title>
                <Card.Image>
                    <ImageBackground source={image} resizeMode="stretch" style={styles.image}>
                        <Text style={styles.text}>
                            Movie Search
                        </Text>
                    </ImageBackground>
                </Card.Image>
                <Card.Divider/>
                <Row>
                    <Button
                        style={{
                        
                        }}
                        icon={
                            <Icon
                            name="facebook"
                            size={30}
                            color="white"
                            />
                        }
                        title="Register with facebook"
                    />
                </Row>
                {/* <Card.Divider/> */}
                <Row>

                {/* <Button
                    style={{
                        width:'100%'
                    }}
                    icon={
                        <Icon
                        name="sc-google-plus"
                        size={30}
                        Type="EvilIcons"
                        color="white"
                        />
                    }
                    title="Register with google"
                /> */}

                </Row>

            </Card>
        </View>
    );
}

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
      height:'100%'
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

export default LandingScreen;
