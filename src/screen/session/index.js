import React, {Component} from "react";
import {View, Button} from "react-native";
import I18n from "./../../i18n/i18n";
import EmailLoginForm from "./EmailLoginForm";
import {handleLogin} from "./../../actions/LoginActions";
import {connect} from "react-redux";
import {handleResetScreen, handlePushScreen} from "./../../lib/HandleScreen";

import {
  BackgroundImage,
  Title,
  ButtonAction,
  FacebookButton,
  TextField,
  Container,
  Label,
  MultiplePicker
} from "./../../component";

class Session extends Component {
  render () {
    const data = [{id: 1, name: "Kandal"}, {id: 2, name: "Phnom Penh"}, {id: 7, name: "Phnom Penh"}, {id: 3, name: "Phnom Penh"}, {id: 4, name: "Phnom Penh"}, {id: 5, name: "Phnom Penh"}];
    return (
      <BackgroundImage>
        <Container loading={this.props.data.loading}>
          <Title title={I18n.t("sign_in.title")} />
          <EmailLoginForm onSubmit={(values) => this.props.handleLogin(values)} navigator={this.props.navigator} data={data}/>
          <View style={styles.labelContainer}>

            <Label text={I18n.t("sign_in.create_new_account")}
              onPress={() => handleResetScreen(this.props.navigator, "registration.index", true)} />
            <Label text={I18n.t("sign_in.forget_password")} style={styles.forgetPassword}
              onPress={() => handlePushScreen(this.props.navigator, "reset_password.index", true)} />
          </View>
        </Container>
      </BackgroundImage>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.loginData
  }
};

const actions = {handleLogin};
export default connect(mapStateToProps, actions)(Session);

const styles = {
  forgetPassword: {
    position: "absolute",
    right: 0
  }
}
