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
import styles from './readingListStyle';
import {getIllustration, getBackground} from '../../utils';
import {AuthContext} from '../../context';
import {CourseDetail} from '../../components';
import LinearGradient from 'react-native-linear-gradient';

MaterialIcons.loadFont().then();
//const categories = state?.courses;

export function readingList({route, navigation}) {
  const course= route?.params;
  // console.log(course.levels["1"]);
  const {state, dispatch} = useContext(AuthContext);
  const [data, setData] = useState({
    tabs: ['List'],
    activeTab: 'List',
    displayedCategories: course.levels["1"],
  });
  const ratings = []
  for (let i = 1; i <= parseInt(course.rating); i++){
    ratings.push("i");
  }
  
  const handleTabPress = (tab, index) => {
    let {activeTab, displayedCategories} = data;
    activeTab = tab;

    if (index === 0) {
        // displayedCategories = categories?.filter(
        //   (category) => category.isLevel == "easy");
        displayedCategories = course.levels["1"];
      } else if (index === 1) {
      // displayedCategories = categories?.filter((category) => category.isLevel == "medium");
      displayedCategories = course.levels["2"];
    } else if (index === 2) {
    //   displayedCategories = categories?.filter((category) => category.isLevel == "hard");
    displayedCategories = course.levels["3"];
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
          {course?.name+ " "}
          {ratings?.map((index) => (
          <MaterialIcons style={styles.stars} name="stars" size={15} color="orange" />
          ))}
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
             <CourseDetail courseDetail={category} roadmapName = {course?.name} level = {data?.activeTab} navigation={navigation}/>
             ))}
          </View>
     
        {/* <FlatList
          data={state?.courses}
          keyExtractor={() => shortid.generate()}
          renderItem={renderCourseList}
          horizontal={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.sectionScrollContainer}
        /> */}
        </ScrollView>
      </View>
    </View>
  );
}
