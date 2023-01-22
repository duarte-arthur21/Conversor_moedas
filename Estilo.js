import { StyleSheet } from "react-native";

const estilo = StyleSheet.create({
  container1: {
    flex: 1,
    display: "flex",
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    height: '70%',
    opacity: 0.7
  },
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    height: '15%',
  },
  Image: {
    flex:0.3,
    width: "100%", 
    height: "35%",
    marginTop: "30%",
    marginBottom: "29%",
  },
  backgroundImage: {
    flex: 1,
    display: 'flex',
    position: 'absolute',
    width: '100%',
    height: '40%'
  },
  resultado: {
    fontSize: 30,
    fontFamily: 'Arial',
    fontWeight: "bold",
    lineHeight: 84,
    color: "#ffa500",
    shadowColor: '#000',
    borderColor: '#000',
    textAlign: 'center',
    marginLeft: '7%',
    marginRight: '5%',
    marginBottom: "10%",
    position: 'relative'
  },
  titulo: {
    fontSize: 20,
    fontFamily: 'Arial',
    fontWeight: "100",
    color:'#fff',
    borderColor: '#000',
    textAlign: 'justify',
    marginLeft: '7%',
    marginRight: '5%',
    position: 'relative'
  },
  textInput: {
    fontSize: 30,
    color: '#000f',
    textAlign: 'center',
    backgroundColor: '#ffff',
    borderBottomColor: '#000',
    borderRadius: 15,
    marginBottom: "5%",
    shadowColor: '#000',
  },
  alignItem: {
    alignItems: "stretch",
    textAlign: "end",
    marginBottom: "1%",
    position: "end",
    justifyContent: "flex-end"
  },
  bottom: {
    fontSize: 30,
    backgroundColor: '#ffa500',
    borderRadius: 15,
    textAlign: 'center', 
    marginBottom: "5%",
    marginTop: "5%",
    width: '100%'
  },
  calcular: {
    fontSize: 25,
    backgroundColor: '#ffa500',
    borderRadius: 10,
    textAlign: 'center',
    marginTop: "5%",
    marginBottom: "5%",
    marginLeft: "5%",
    width: '90%'
  },
});

const image = {uri: "./imagens/download.PNG" };


export {estilo, image}