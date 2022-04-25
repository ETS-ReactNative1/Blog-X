import { StyleSheet } from 'react-native';
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    button:{
        //textAlign: 'right',
        fontSize: 5,
        alignContent: "right",
        position: 'absolute',
        marginLeft:"70"
    },
    picture:{
        position: 'absolute', 
        right: -60
    },
    headingText:{
        color: 'white',
        //textAlign: 'right',
        fontSize: 13,
        fontWeight: "bold",
       // marginLeft: 100
    },
    textual:{
        textAlign: 'left',
        
    },
    // position: 'absolute',
    //     top: 16,
    //     left: 16,
    //     backgroundColor: '#eee',
    //     height: 32,
    //     width: 32,
    //     borderRadius: 5,
    //     display: 'flex',
    //     alignItems: 'center',
    //     justifyContent: 'center',
   text:{
        color: 'white',
        //textAlign: 'right',
        fontSize: 9,
        fontWeight: "bold",
        width:300 
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        flexDirection: 'row',
        backgroundColor: 'rgba(0,0,0,0.8)',
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,
      },
      innerImage: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 200
      },
      title: {
        margin: 15,
        fontSize: 28,
        fontWeight: '500',
        color: '#fff',
        textAlign: 'center'
      },
      speakerText: {
        fontStyle: 'italic',
        color: '#fff',
        marginTop: 5,
        fontSize: 16,
      },
      description: {
        margin: 15,
        marginTop: 7,
        textAlign: 'justify',
      },
      floatFooter: {
        position: 'absolute',
        bottom: 0
      },
    title: {

    },
    logo: {
        flex: 1,
        height: 120,
        width: 90,
        alignSelf: "center",
        margin: 30
    },
    input: {
        height: 48,
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: 'white',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 30,
        marginRight: 30,
        paddingLeft: 16
    },
    button: {
        backgroundColor: '#788eec',
        marginLeft: 50,
        marginRight: 30,
        marginTop: 20,
        height: 48,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: 'center'
    },
    buttonTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: "bold"
    },
    footerView: {
        flex: 1,
        alignItems: "center",
        marginTop: 20
    },
    footerText: {
        fontSize: 16,
        color: '#2e2e2d'
    },
    footerLink: {
        color: "#788eec",
        fontWeight: "bold",
        fontSize: 16
    },
    root: {
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#28282B'
      },
      logo: {
        width: '70%',
        height: '30%',
        maxWidth: 300,
        maxHeight: 200,
      }
})