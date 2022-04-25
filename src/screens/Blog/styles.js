import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    image_caption:{
        textAlign: 'center',
   // fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: 12,
   // textDecorationLine: 'underline',
    //line-through is the trick
    },
    date:{
        textAlign: 'center',
        // fontWeight: 'bold',
         fontStyle: 'italic',
         fontSize: 10,
    },
    author:{
        textAlign: 'center',
        // fontWeight: 'bold',
         fontStyle: 'italic',
         fontSize: 10,
    },
    content:{
        textAlign: 'justify', 
        margin: 20
    },
    blog_title:{
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20
    },
    container: {
        flex: 1,
        alignItems: 'center'
    },
    title: {

    },
    backButton: {
        position: 'absolute',
        top: 16,
        left: 16,
        backgroundColor: '#eee',
        height: 32,
        width: 32,
        borderRadius: 5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
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
       //dColor: 'white',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 30,
        marginRight: 30,
        paddingLeft: 16
    },
    button: {
        backgroundColor: '#788eec',
        marginLeft: 30,
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
        //color: '#2e2e2d'
    },
    footerLink: {
        //color: "#788eec",
        fontWeight: "bold",
        fontSize: 16
    },
    root: {
        alignItems: 'center',
        padding: 20,
        //backgroundColor:"#28282B"
      },
      scroll:{
        backgroundColor:"#28282B"
      },
      logo: {
        width: '70%',
        height: '30%',
        maxWidth: 300,
        maxHeight: 200,
      }
})