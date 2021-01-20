import React, {Component} from 'react';
import {View, Alert, ActivityIndicator} from 'react-native';
class Login extends Component {
  state = {
    pass: '',
    user: '',
    displayName: '',
    email: '',
    password: '',
    isLoading: false,
  };

  componentDidMount() {}
  componentDidUpdate(prevProps, prevState) {
    if (this.state.isLoading !== prevState.isLoading) {
      return true;
    }
  }





  sendInfo = async () => {};

  componentDidUpdate(prevProps, prevState) {}

  render() {
    if (this.state.isLoading) {
      return (
        <View>
          <ActivityIndicator size="large" color="#9E9E9E" />
        </View>
      );
    }
    return (
      <View>
        <Text>datos</Text>
      </View>
    );
  }
}
export default Login;
