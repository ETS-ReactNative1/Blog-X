import React, {useContext} from 'react';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './courseDetailStyle';
import {AuthContext} from '../../context';

MaterialIcons.loadFont().then();

export function CourseDetail({courseDetail}) {
  const {state, dispatch} = useContext(AuthContext);

  const handleBookmark = () => {
    dispatch({
      type: 'addBookmark',
      payload: {courseDetail},
    });
  };

  return (
    <View style={styles.singleCourse}>
        <ImageBackground
          source={{
            uri: courseDetail?.image,
          }}
          style={styles.courseImage}
          imageStyle={styles.courseBackgroundStyle}>
        </ImageBackground>
        <View style={styles.courseRightContainer}>
          <TouchableOpacity onPress={() => handleBookmark()}>
            {courseDetail?.isBookmarked ? (
              <MaterialIcons
                name="bookmark"
                size={20}
                color="#292929"
                style={styles.bookmarkIcon} />
            ) : (
              <MaterialIcons
                name="bookmark-border"
                size={20}
                color="#292929"
                style={styles.bookmarkIcon} />
            )}
          </TouchableOpacity>
          <Text numberOfLines={2} ellipsizeMode="tail" style={styles.courseInfo}>
            {courseDetail?.title}
          </Text>
          <View style={styles.progressBarContainer}>
            {courseDetail?.progress < 100 ? (
              <View
                style={[
                  styles.progressBarItem,
                  { width: `${courseDetail?.progress}%` },
                ]}></View>) :
              (
                <View
                  style={[
                    styles.progressBarItemCompleted,
                    { width: `${courseDetail?.progress}%` },
                  ]}></View>
              )}
          </View>
        </View>
      </View>
  );
}
