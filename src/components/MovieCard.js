import React, {useEffect,useState} from 'react';
import { Card, Icon,Rating } from 'react-native-elements';
import {View, Text, StyleSheet,Image } from 'react-native';


const MovieCard = ({movieDetails}) => {
    return (
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
    );
}

export default MovieCard;