import React, { Component } from "react";
// import { View, Text } from "react-native";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import firebase from "firebase";
import ReduxThunk from "redux-thunk"; //Wiring up the middle ware :)

import reducers from "./reducers";
// import LoginForm from "./components/LoginForm";
import Router from "./Router";

class App extends Component {
  componentWillMount() {
    // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: "AIzaSyB4Dl_hp-XK6CfGxkSIMOJbPCEm6UNzdxs",
      authDomain: "myproject-321-ed70b.firebaseapp.com",
      databaseURL: "https://myproject-321-ed70b.firebaseio.com",
      projectId: "myproject-321-ed70b",
      storageBucket: "myproject-321-ed70b.appspot.com",
      messagingSenderId: "410499592850",
      appId: "1:410499592850:web:add11d3be0c6a123"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    console.disableYellowBox = true;
  }


  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
        {/* <LoginForm /> */}
        {/* <View>
          <Text>Bismillah Redux Manager Project</Text>
        </View> */}
      </Provider>
    );
  }
}

export default App;
