import React, { Component } from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { Formik } from 'formik';
import * as yup from 'yup';

import Input from '../../components/Input';
import ValidationAlert from '../../components/ValidationIndicator';
import CustomImageBackground from '../../components/CustomImageBackground';
import BackArrow from '../../components/Buttons/BackArrow';

import { createPassword, setUser } from '../../redux/auth/actions';
import {
  getIsAuthenticated,
  getIsCreating,
  getWallet,
} from '../../redux/auth/selectors';

import { styles } from './styles';
import HeaderText from '../../components/HeaderText';
import Hyperink from '../../components/Hyperlink';
import PrimaryButton from '../../components/Buttons/PrimaryButton';

const validationSchema = yup.object().shape({
  password: yup
    .string()
    .required('Please Enter your password')
    .min(8)
    .matches('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})'),
  confirmPassword: yup
    .string()
    .required()
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
  acceptTerms: yup
    .bool()
    .oneOf([true], 'Accept Terms & Conditions is required'),
});

const initialValues = {
  password: '',
  confirmPassword: '',
  acceptTerms: false,
};

class CreatePasswordScreen extends Component {
  state = {
    passwordLength: false,
    passwordUppercase: false,
    passwordLowercase: false,
    passwordNumbers: false,
    message: '',
    isCreating: false,
  };

  componentDidUpdate() {
    const { isAuthenticated, navigation } = this.props;
    if (isAuthenticated) {
      navigation.navigate({ routeName: 'AlternatePhrase' });
    }
  }

  checkPassword = text => {
    this.setState({ passwordUppercase: !!text.match(/[A-Z]/g) });
    this.setState({ passwordLowercase: !!text.match(/[a-z]/g) });
    this.setState({ passwordLength: text.length >= 8 });
    this.setState({ passwordNumbers: !!/\d/.test(text) });
  };

  comparePasswords = (pass, conf) => {
    this.setState({
      message: pass !== conf ? 'Passwords must match' : '',
    });
  };

  render() {
    const {
      passwordLowercase,
      passwordUppercase,
      passwordNumbers,
      passwordLength,
      isCreating,
      message,
    } = this.state;
    const { actions, navigation } = this.props;
    return (
      <CustomImageBackground>
        <ScrollView
          contentContainerStyle={styles.container}
          keyboardShouldPersistTaps="handled"
        >
          <KeyboardAvoidingView enabled>
            <View style={styles.header}>
              <BackArrow onPress={() => navigation.goBack()} />
              <HeaderText
                text="Create Password"
                style={{ alignSelf: 'center' }}
              />
              <BackArrow iconStyle={{ display: 'none' }} />
            </View>

            <View style={styles.validationWrapper}>
              <ValidationAlert isValid={passwordLowercase} text="1 Lowercase" />
              <ValidationAlert isValid={passwordUppercase} text="1 Uppercase" />
              <ValidationAlert isValid={passwordNumbers} text="1 Number" />
              <ValidationAlert isValid={passwordLength} text="8 Characters" />
            </View>

            <Formik
              validationSchema={validationSchema}
              initialValues={initialValues}
              onSubmit={value => {
                this.setState({ isCreating: true });
                actions.createPassword(value.password);
              }}
            >
              {({
                handleSubmit,
                handleChange,
                isValid,
                dirty,
                values,
                setFieldValue,
              }) => (
                <View style={styles.formWrapper}>
                  <Text style={styles.text}>New Password</Text>
                  <Input
                    value={values.password}
                    secureTextEntry
                    onChangeText={text => {
                      this.checkPassword(text);
                      handleChange('password')(text);
                    }}
                  />

                  <Text style={styles.text}>Confirm Password</Text>
                  <Input
                    value={values.confirmPassword}
                    secureTextEntry
                    onChangeText={text => {
                      this.comparePasswords(values.password, text);
                      handleChange('confirmPassword')(text);
                    }}
                  />
                  <Text style={{ color: 'red' }}>{message}</Text>

                  <View style={styles.agreementHolder}>
                    <BouncyCheckbox
                      onPress={value => setFieldValue('acceptTerms', value)}
                      value={values.acceptTerms}
                      text=""
                      borderWidth={2}
                      borderRadius={4}
                      borderColor="black"
                      fillColor="black"
                    />
                    <Text style={styles.agreementText}>
                      I have read and agree to the
                      {' '}
                      <Hyperink
                        text="Terms of Use"
                        onPress={() => navigation.navigate('TermsOfUse')}
                      />
                    </Text>
                  </View>
                  <View style={styles.buttonHolder}>
                    {isCreating ? (
                      <ActivityIndicator animating size="large" color="black" />
                    ) : (
                      <PrimaryButton
                        text="Create"
                        onPress={handleSubmit}
                        style={[
                          styles.button,
                          { opacity: !dirty || !isValid ? 0.4 : 1 },
                        ]}
                        textStyle={styles.buttonText}
                        disabled={!dirty || !isValid}
                      />
                    )}
                  </View>
                </View>
              )}
            </Formik>
          </KeyboardAvoidingView>
        </ScrollView>
      </CustomImageBackground>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isAuthenticated: getIsAuthenticated,
  isCreating: getIsCreating,
  wallet: getWallet,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      setUser,
      createPassword,
    },
    dispatch,
  ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreatePasswordScreen);
