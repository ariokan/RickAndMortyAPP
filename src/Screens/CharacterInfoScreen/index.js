import React, {useEffect, useState} from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';

const CharacterInfoScreen = ({route}) => {
  const {name, image, status, gender, species, type} = route.params;
  return (
    <View>
      <Image style={styles.image} source={{uri: image}} />
      <Text>
        <Text style={{fontWeight: 'bold'}}>Name :</Text>
        {name}
      </Text>
      <Text>
        <Text style={{fontWeight: 'bold'}}>Gender :</Text>
        {gender}
      </Text>
      <Text>
        <Text style={{fontWeight: 'bold'}}>Status :</Text>
        {status}
      </Text>
      <Text>
        <Text style={{fontWeight: 'bold'}}>Species :</Text>
        {species}
      </Text>
    </View>
  );
};
export default CharacterInfoScreen;
