import React from 'react';
import { View, Image, ScrollView, Text } from 'react-native';
import style from './style';

const ProfileTabContent = () => {
  const images = new Array(10).fill(require('../../assets/images/default_post.png'));

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={style.profileTabContentContainer}>
      <View style={style.profileTabContent}>
        {images.map((image, index) => (
          <Image key={index} resizeMode={'contain'} style={style.image} source={image} />
        ))}
        <Text>Profile Tab Content</Text> 
      </View>
    </ScrollView>
  );
};

export default ProfileTabContent;
