import React, { useContext, useEffect } from 'react';
import { Formik } from 'formik';

import AuthContext from '../../../utils/authContext';
import ApiContext from '../../../utils/apiContext';
import { ValidSchema, SignupAuth } from '../helpers';

import ErrorText from '../../../components/Common/errorText';
import InputWrapper from '../../../components/Common/forms/TextInputWrapper';
import Button from '../../../components/Auth/Buttons/authButton';
import AuthCard from '../../../components/Auth/authCard';
import Label from '../../../components/Auth/authFormLabel';
import Input from '../../../components/Common/forms/TextInput';
import ContinueWith from '../../../components/Auth/continueWith';
import GoogleButton from '../../../components/Auth/Buttons/googleButton';
import LoadingOverlay from '../../../components/Common/loadingOverlay';
import SignUpFormHeader from './signupFormHeader';

const Signup = () => {
  const { firebase, LogIn } = useContext(AuthContext);
  const { fetchFailure, fetchInit, fetchSuccess, apiState } = useContext(ApiContext);
  const { isLoading } = apiState;

  /* eslint-disable */
  useEffect(() => {
    return () => fetchSuccess();
  }, []);
  /* eslint-enable */

  const handleSubmit = async (values) => {
    fetchInit();

    let email = values.email;
    let password = values.password;
    let username = values.username;

    let authRes = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((error) => {
        fetchFailure(error);
      });

    SignupAuth(authRes, firebase, fetchFailure, username, LogIn);
  };

  //Google OAuth2 Signin
  const GoogleSignin = async () => {
    fetchInit();
    let provider = new firebase.auth.GoogleAuthProvider();

    //wait for firebase to confirm signup
    let authRes = await firebase
      .auth()
      .signInWithPopup(provider)
      .catch((error) => {
        fetchFailure(error);
      });

    SignupAuth(authRes, firebase, fetchFailure, null, LogIn);
  };

  return (
    <div>
      {isLoading && <LoadingOverlay />}
      <SignUpFormHeader />

      <AuthCard>
        <Formik
          validationSchema={ValidSchema}
          initialValues={{ email: '', password: '', username: '' }}
          onSubmit={handleSubmit}
        >
          {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <Label htmlFor="email">Email:</Label>
              <InputWrapper>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  data-test-id="email"
                />
              </InputWrapper>
              {errors.email && touched.email && <ErrorText>{errors.email}</ErrorText>}
              <Label htmlFor="username">First and Last Name:</Label>
              <InputWrapper>
                <Input
                  type="text"
                  name="username"
                  id="username"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.username}
                  data-test-id="username"
                />
              </InputWrapper>
              {errors.username && touched.username && <ErrorText>{errors.username}</ErrorText>}
              <Label htmlFor="password">Password:</Label>
              <InputWrapper>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  data-test-id="password"
                />
              </InputWrapper>
              {errors.password && touched.password && <ErrorText>{errors.password}</ErrorText>}
              <Button type="submit">SignUp</Button>
            </form>
          )}
        </Formik>

        <ContinueWith />
        <GoogleButton GoogleSignin={GoogleSignin} />
      </AuthCard>
    </div>
  );
};

export default Signup;
