import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { LinearGradient } from "expo-linear-gradient";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      confirm: "",
    };
  }

  render() {
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <View style={styles.container}>
          <StatusBar backgroundColor="#e08700" barStyle="light-content" />
          <View style={styles.header}>
            <Text style={styles.text_header}>Register Now</Text>
          </View>

          <Animatable.View animation="fadeInUpBig" style={styles.footer}>
            <View style={styles.footer}>
              <ScrollView showsVerticalScrollIndicator={false}>
                {/*{auth.error.register && (
                  <Text style={{ color: "red" }}>{auth.error.register}</Text>
                )}*/}

                <Text style={[styles.text_footer, { marginTop: 15 }]}>
                  Email
                </Text>
                <View style={styles.action}>
                  <Feather name="mail" color="#05375a" size={20} />
                  <TextInput
                    placeholder="Please Enter Your Email Here"
                    keyboardType="email-address"
                    value={this.state.email}
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(text) => {
                      this.handleUpdateState("email", text);
                    }}
                  />
                </View>

                <Text style={[styles.text_footer, { marginTop: 15 }]}>
                  Password
                </Text>

                <View style={styles.action}>
                  <FontAwesome name="lock" color="#05375a" size={20} />
                  <TextInput
                    placeholder="Please Enter Your password Here"
                    value={this.state.password}
                    secureTextEntry={true}
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(text) => {
                      this.handleUpdateState("password", text);
                    }}
                  />
                </View>

                <Text style={[styles.text_footer, { marginTop: 15 }]}>
                  Confirm Password
                </Text>

                <View style={styles.action}>
                  <FontAwesome name="lock" color="#05375a" size={20} />
                  <TextInput
                    placeholder="Please Confirm Your Password Here"
                    value={this.state.confirm}
                    secureTextEntry={true}
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(text) => {
                      this.handleUpdateState("confirm", text);
                    }}
                  />
                </View>

                <View style={styles.button}>
                  <LinearGradient
                    colors={["#000", "#e08700"]}
                    style={styles.signIn}
                  >
                    <TouchableOpacity onPress={this.handleOnSubmit}>
                      <Text style={[styles.textSign, { color: "#fff" }]}>
                        Sign Up
                      </Text>
                    </TouchableOpacity>
                  </LinearGradient>
                </View>
                <View style={styles.createAccountContainer}>
                  <Text style={styles.haveAccount}>
                    Already have an account?{" "}
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate("LogInScreen");
                    }}
                    style={styles.createAccountOpacity}
                  >
                    <Text style={styles.createAccountText}>SignIn</Text>
                  </TouchableOpacity>
                </View>
                <Text style={styles.policy}>
                  By signing up you agree to our Terms and Privacy Policy
                </Text>
              </ScrollView>
            </View>
          </Animatable.View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e08700",
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 10,
    paddingBottom: 30,
  },
  footer: {
    flex: 2,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  text_header: {
    color: "black",
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
    //paddingBottom: 20,
  },
  text_footer: {
    color: "#05375a",
    fontSize: 15,
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 2,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 3,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "#05375a",
  },

  policy: {
    textAlign: "center",
  },
  button: {
    alignItems: "center",
    marginTop: 20,
  },
  signIn: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
  },
  createAccountContainer: {
    flexDirection: "row",
    //flex: 1,
    paddingBottom: 15,
  },

  haveAccount: {
    marginLeft: 25,
    fontSize: 15,
    paddingTop: 19,
    justifyContent: "center",
  },

  createAccountText: {
    color: "#06C8F4",
    fontSize: 16,
    paddingTop: 19,
    justifyContent: "center",
  },
});

export default Register;
