import React, {useState,useContext, useEffect, useCallback} from 'react';
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
import LinearGradient from 'react-native-linear-gradient';
import { RotationGestureHandler } from 'react-native-gesture-handler';

MaterialIcons.loadFont().then();

const Data = {
    "id": "621e85042ed8daf4a540a3e6",
    "name": "Machine Learning Basics",
    "rating": 4,
    "author": "Tanuja",
    "tags": [
        "ML",
        "DeepLearning"
    ],
    "levels": {
        "1": [
            {
                "title": "Intro to ML",
                "link": "https://arxiv.org/pdf/1511.06434.pdf"
            },
            {
                "title": "Intro review to DL",
                "link": "https://arxiv.org/pdf/1511.06434.pdf"
            }
        ],
        "2": [
            {
                "title": "Intro to CNN",
                "link": "https://arxiv.org/pdf/1511.06434.pdf"
            }
        ],
        "3": [
            {
                "title": "Adam: Stochastic Optimizer",
                "link": "https://arxiv.org/pdf/1511.06434.pdf"
            }
        ]
    }
}
export function coursesList({route, navigation}) {

  const [roadmapData, setRoadmapData] = useState([])
  const [levelData, setLevelData] = useState(null)
  const course= route?.params;

  useEffect(() => {
    fetchApiCall();
    // const timer = setTimeout(() => {
    //   console.log('This will run after 2 second!')
    //   forceUpdate();
    // }, 2000);
    //return () => clearTimeout(timer);

},[])
  useEffect(() => { setLevelData(levelData => levelData) }, [levelData])
  // console.log(levelData.levels["1"])
  const {state, dispatch} = useContext(AuthContext);
  const [data, setData] = useState({
    tabs: ['Level 1', 'Level 2', 'Level 3'],
    activeTab: 'Level 1',
    displayedCategories: levelData === null ? null: levelData.levels["1"],
  });

  const ratings = []
  for (let i = 1; i <= parseInt(course.rating); i++){
    ratings.push("i");
  }

  const fetchApiCall = () => {
      fetch("https://project700-backend-neo.herokuapp.com/roadmap/papers"+course.uid, {
       "method": "GET",
     }).then(res => res.json()) //<< The problem is here
     .then(res => {
         console.log(res)
         setRoadmapData(res.roadmap_papers);
         processPapers(res.roadmap_papers); 
     })
     .catch(err => {
         console.log(err)
     })    
 
  }

  const processPapers = (data) => {
    level1List = []
    level2List = []
    level3List = []
    data.map((category) => {
      if(category.level === "1"){
        level1List.push( {
          "title": category.name,
          "link": category.link,
          "difficulty": category.diffculty
        });
      }
      if(category.level === "2"){
        level2List.push( {
          "title": category.name,
          "link": category.link,
          "difficulty": category.diffculty
        });
      }
      if(category.level === "3"){
        level3List.push( {
          "title": category.name,
          "link": category.link,
          "difficulty": category.diffculty
        });
      }
    });
  const sorter = (a, b) => a.diffculty > b.diffculty ? 1 : -1;
   level1List.sort(sorter);
   level2List.sort(sorter);
   level3List.sort(sorter);
    const tData = {
      "levels":{
        "1": level1List,
        "2": level2List,
        "3": level3List
      }
    }

    setLevelData(tData);
    // console.log("3")
    // console.log(levelData)
  }
  const handleTabPress = (tab, index) => {
    let {activeTab, displayedCategories} = data;
    activeTab = tab;

    if (index === 0) {
        // displayedCategories = categories?.filter(
        //   (category) => category.isLevel == "easy");
        displayedCategories = levelData.levels["1"];
      } else if (index === 1) {
      // displayedCategories = categories?.filter((category) => category.isLevel == "medium");
      displayedCategories = levelData.levels["2"];
    } else if (index === 2) {
    //   displayedCategories = categories?.filter((category) => category.isLevel == "hard");
    displayedCategories = levelData.levels["3"];
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
             <CourseDetail courseDetail={category} roadmapName = {roadmapData?.name} level = {data?.activeTab} navigation={navigation}/>
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
          <View style={styles.createButton}><TouchableOpacity onPress={() => handleNavigation('updateInitRoadmap', course)}>
        <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{x: 1, y: 1 }}
        colors={[ '#545352', '#737271', '#B3B1AF']}
        style={styles.gradBox}>
          <Text style= {styles.createText}>Edit Roadmap</Text>  
          <MaterialIcons style = {styles.icon1} name="mode-edit" size={15} color="white"/>
          </LinearGradient>         
          </TouchableOpacity >
                </View>
        
      </View>
    </View>
  );
}
