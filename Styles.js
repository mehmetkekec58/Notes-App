import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 20,

  },
  navigate: {
    width: '100%',
    backgroundColor: "#2b90c8",
    height: "7%",
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 12,
    paddingRight: 20,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: '0.9',
    shadowRadius: 15.19,
    elevation: 23,

  },
  naviBrand: {
    fontWeight: 'bold',
    color: 'white',
    right: '39%',
    top: '84%',
    marginLeft: 40,
    fontSize: 20,

  },
  naviBrandWithNoteAdd: {
    fontWeight: 'bold',
    color: 'white',
    right: '39%',
    top:"10%",
    bottom: 3,
    marginLeft: 40,
    fontSize: 20,
  },
  login: {
    color: 'black',
    fontWeight: 'bold',
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 5,

  },
  naviButton: {
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 5,
    left: '44%',
    bottom: 10,
    fontSize: 15,
    backgroundColor: 'rgb(0,0,0,0)',

  },

  image: {
    width: 30,
    height: 30,

  },
  input: {
    height: 45,
    width: "88%",
    marginTop: 12,
    marginLeft: 22,
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
  },
  inputButton:
  {
    backgroundColor: 'white',
    width: '12%',
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    alignContent: 'center',
    bottom: 42,
    left: '82%',
    height: 40,
    padding: 5,
  },
  addButton: {
    top: 5,
    left: '35%',

  },
  navigateStyleWithKeyboardOpen: {
    width: '100%',
    backgroundColor: "#2b90c8",
    height: "10%",
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
  cardText: {
    margin: 2,
    marginLeft: 5,
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: 14,
  },
  scroll: {
    marginTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 100,
    borderRadius: 20,
    height: '100%',
    backgroundColor: '#f0eef0',

  },
  noteSaveButtonsView: {
    flexDirection: "row",
    flexWrap: 'wrap',
    left: '3%'

  },
  addNoteInput: {
    height: '60%',
    width: "90%",
    marginTop: 10,
    margin: 20,
    textAlign: 'left',
    borderWidth: 1,
    borderRadius: 8,
    textAlignVertical: 'top',
    padding: 10,

  },
  saveButton: {
    backgroundColor: '#8bd35c',
    height: '70%',
    width: '40%',
    borderRadius: 8,
    margin: 10,
    padding: 8,
    alignItems: 'center',
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: '0.9',
    shadowRadius: 15.19,
    elevation: 23,

  },
  cancelButton: {
    backgroundColor: '#df4d60',
    height: '70%',
    width: '40%',
    margin: 10,
    borderRadius: 8,
    padding: 8,
    alignItems: 'center',
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: '0.9',
    shadowRadius: 15.19,
    elevation: 23,
  },
  viewForCard: {
    flexDirection: "row",
    flexWrap: 'wrap',
    marginBottom: 130,
    marginTop: 20,
  },
  boxIcon: {
    height: 100,
    width: 100,
    top: 120,
  },
  noNoteText: {
    fontSize: 30,
    textAlign: 'center',
    textTransform: 'uppercase',
    top: 265
  },
  noNoteView: {
    height: "100%",
    alignContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
  allSelectModeText: {
    color: 'black',
    alignItems: 'center',
    width: 150,
    fontSize: 15,


  },
  allSelectButton: {
    right: 90,
    top: 20,
    borderRadius: 15,
    padding: 5,

  },
  noteEditDateText: {
    fontSize: 13,
    fontWeight: 'bold',
    left: 20,
    top:9,
  }
});
