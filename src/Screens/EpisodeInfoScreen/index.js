import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Alert,
  FlatList,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import Router from '../../router';

import styles from './styles';

const EpisodeInfoScreen = ({navigation, route}) => {
  const {characters} = route.params;
  const {name, air_date, episode} = route.params;
  const [charInfo, setCharInfo] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  //functions
  const getCharcount = () => {
    characters.forEach(function (item, index, arr) {
      arr[index] = item.slice(42) + ',';
    });
  };
  const fetchChar = async () => {
    try {
      getCharcount();
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/${characters}`,
      );
      const responseJson = await response.json();
      setCharInfo(responseJson);
      setisLoading(false);
      return responseJson;
    } catch (error) {
      return null;
    }
  };
  useEffect(() => {
    fetchChar();
  }, []);

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.touchable}
        onPress={() => navigation.navigate('CharacterInfo', item)}>
        <View style={styles.container}>
          <Image style={{width: 100, height: 100}} source={{uri: item.image}} />
          <View style={styles.characterInfoContainer}>
            <Text style={{fontWeight: 'bold'}}>{item.name}</Text>
            <Text>status:{item.status}</Text>
            <Text>gender:{item.gender}</Text>
            <Text>species:{item.species}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  if (isLoading) {
    return (
      <View style={styles.activitIndicator}>
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
    );
  } else {
    return (
      <View>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Episode:{name}</Text>
        </View>
        <View>
          <Text>{episode}</Text>
          <Text>{name}</Text>
          <Text>{air_date}</Text>
        </View>
        <FlatList
          style={styles.flatList}
          data={charInfo}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
};
export default EpisodeInfoScreen;
