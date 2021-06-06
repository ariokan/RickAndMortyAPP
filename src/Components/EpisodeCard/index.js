import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import {NavigationContainer} from '@react-navigation/native';

const EpisodeCard = ({item, episode, episodeName, airdate, navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.columun}>
          <Text style={styles.header}> {episodeName} </Text>
          <Text style={styles.columuntext}> {episode}</Text>
          <Text style={styles.columuntext}> {airdate}</Text>
        </View>
        <View style={styles.row}>
          <View style={styles.buttoncontainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('EpisodeInfo', item)}>
              <Text style={styles.buttontext}>{episode} </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};
export default EpisodeCard;
