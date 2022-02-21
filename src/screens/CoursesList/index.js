import React, {useState,useContext} from 'react';
import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import shortid from 'shortid';
import styles from './coursesListStyle';
import {getIllustration, getBackground} from '../../utils';
import {AuthContext} from '../../context';
import {CourseDetail} from '../../components';

MaterialIcons.loadFont().then();
//const categories = state?.courses;

const categories = [
  {
    id: 0,
    title: 'An introduction to deep learning',
    isBookmarked: false,
    progress: 100,
    isLevel : "easy",
    image:
      'https://ieeexplore.ieee.org/xploreAssets/images/absImages/01491134.png',
  },
  {
    id: 1,
    title: 'An introductory review of Deep Learning for Prediction Models with Big Data',
    isBookmarked: true,
    progress: 85,
    isLevel : "easy",
    image:
      'https://localist-images.azureedge.net/photos/38261105051636/card/b0fc0ea2634a78bf6490d63f4b69e66d5bb13e81.jpg',
  },
  {
    id: 2,
    title: 'Reducing the dimensionality of data with neural networks',
    isBookmarked: false,
    progress: 100,
    isLevel : "easy",
    image:
      'https://ieeexplore.ieee.org/xploreAssets/images/absImages/01491134.png',
  },
  {
    id: 3,
    title: 'Introduction to Convolutional Neural Networks',
    isBookmarked: true,
    progress: 100,
    isLevel : "medium",
    image:
      'https://ieeexplore.ieee.org/xploreAssets/images/absImages/01491134.png',
  },
  {
    id: 4,
    title: 'Visualising and Understanding Convolutional Networks',
    isBookmarked: true,
    progress: 70,
    isLevel : "medium",
    image:
      'https://ieeexplore.ieee.org/xploreAssets/images/absImages/01491134.png',
  },
  {
    id: 5,
    title: 'On the importance of initialization and momentum in deep learning',
    isBookmarked: true,
    progress: 90,
    isLevel : "hard",
    image:
      'https://localist-images.azureedge.net/photos/38261105051636/card/b0fc0ea2634a78bf6490d63f4b69e66d5bb13e81.jpg',
  },
  {
    id: 6,
    title: 'Adam:A method for stochastic optimization',
    isBookmarked: true,
    progress: 35,
    isLevel : "hard",
    image:
      'https://ieeexplore.ieee.org/xploreAssets/images/absImages/01491134.png',
  },
  {
    id: 7,
    title: 'Improved Adam Optimizer for Deep Neural Networks',
    isBookmarked: true,
    progress: 84,
    isLevel : "hard",
    image:
    'https://ieeexplore.ieee.org/xploreAssets/images/absImages/01491134.png',
  },
];

export function coursesList({route, navigation}) {
  const course = route?.params;

  const {state, dispatch} = useContext(AuthContext);
  const [data, setData] = useState({
    tabs: ['Easy', 'Medium', 'Hard'],
    activeTab: 'Easy',
    displayedCategories: categories,
  });

  const handleTabPress = (tab, index) => {
    let {activeTab, displayedCategories} = data;
    activeTab = tab;

    if (index === 0) {
        displayedCategories = categories?.filter(
          (category) => category.isLevel == "easy");
      } else if (index === 1) {
      displayedCategories = categories?.filter((category) => category.isLevel == "medium");
    } else if (index === 2) {
      displayedCategories = categories?.filter((category) => category.isLevel == "hard");
    } 

    setData({...data, activeTab, displayedCategories});
  };

  const handleNavigation = (route, params) => {
    navigation?.navigate('SingleStack', {screen: route, params});
  };
  const handleBackButton = () => {
    navigation?.goBack();
  };

  return (
    <View style={styles.coursesListContainer}>
      <View style={[styles.bgContainer, getBackground(course?.id)]}>
        <ImageBackground
          source={getIllustration(course?.id)}
          style={styles.illustrationImage}
          imageStyle={styles.illustrationBackgroundStyle}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => handleBackButton()}>
            <MaterialIcons name="keyboard-arrow-left" size={25} color="#000" />
          </TouchableOpacity>
        </ImageBackground>
      </View>   
      <View style={styles.coursesListContent}>
      <Text style={styles.coursesListTitle}>
          {course?.title} Papers List
        </Text>
        <View style={styles.tabHeaderContainer}>
      {data?.tabs?.map((tab, index) => (
        <TouchableOpacity
          key={shortid.generate()}
          style={styles.singleTab}
          onPress={() => handleTabPress(tab, index)}>
          <Text
            style={[
              styles.tabText,
              data?.activeTab === tab
                ? styles.activeTabText
                : styles.inActiveTabText,
            ]}>
            {tab}
          </Text>
          {data?.activeTab === tab ? (
            <View style={styles.activeTabBottom}></View>
          ) : null}
        </TouchableOpacity>
      ))}
    </View>
    <ScrollView
          style={styles.scrollViewContent}
          showsVerticalScrollIndicator={false}>
          <View style={styles.tabBodyContainer}>
            {data?.displayedCategories?.map((category, index) => (
             <CourseDetail courseDetail={category}/>
             ))}
          </View>
        </ScrollView>
        {/* <FlatList
          data={state?.courses}
          keyExtractor={() => shortid.generate()}
          renderItem={renderCourseList}
          horizontal={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.sectionScrollContainer}
        /> */}
      </View>
    </View>
  );
}
