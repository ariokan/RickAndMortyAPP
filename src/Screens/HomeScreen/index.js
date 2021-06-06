import {DarkTheme} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import RNBootSplash from 'react-native-bootsplash';
import {
  View,
  Text,
  Button,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import styles from './styles';
import EpisodeCard from '../../Components/EpisodeCard';

const HomeScreen = ({navigation, route}) => {
  const [dataList, setDataList] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const fetchEpisodeList = async () => {
    try {
      const responseP1 = await fetch(
        `https://rickandmortyapi.com/api/episode?page`,
      );
      const responseP2 = await fetch(
        `https://rickandmortyapi.com/api/episode?page=2`,
      );
      const responseP3 = await fetch(
        `https://rickandmortyapi.com/api/episode?page=3`,
      );
      const responseJsonP1 = await responseP1.json();
      const responseJsonP2 = await responseP2.json();
      const responseJsonP3 = await responseP3.json();
      setDataList([
        ...responseJsonP1.results,
        ...responseJsonP2.results,
        ...responseJsonP3.results,
      ]);
      setisLoading(false);
      setRefreshing(false);
      return responseJson;
    } catch (error) {
      return null;
    }
  };

  useEffect(() => {
    fetchEpisodeList();
    setTimeout(() => {
      RNBootSplash.hide({fade: true});
    }, 1000);
  }, []);
  const renderItem = ({item}) => {
    return (
      <EpisodeCard
        item={item}
        episode={item.episode}
        episodeName={item.name}
        navigation={navigation}
        airdate={item.air_date}
      />
    );
  };
  const refreshHandler = () => {
    setRefreshing(true);
    fetchEpisodeList();
  };
  if (isLoading) {
    return (
      <View style={styles.activitIndicator}>
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
    );
  } else {
    return (
      <View style={{flex: 1}}>
        <FlatList
          data={dataList}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          refreshing={refreshing}
          onRefresh={refreshHandler}
        />
      </View>
    );
  }
};
export default HomeScreen;
