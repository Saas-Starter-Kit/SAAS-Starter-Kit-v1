import React from 'react';
import styled from 'styled-components';
import { colors, breakpoints } from '../../../styles/theme';
import { Link } from 'gatsby';
import Title from '../../../components/Auth/title';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (min-width: ${breakpoints.small}) {
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    max-width: 32rem;
  }
`;

const AltText = styled.div`
  text-align: center;
  margin-top: -1rem;
  margin-bottom: 2rem;
  color: ${colors.gray500};
`;

const SignupFormHeader = () => (
  <Wrapper>
    <Title>Sign-Up for an Account</Title>
    <AltText>
      <Link to="/auth/login">Already Have an Account? Login here</Link>
    </AltText>
  </Wrapper>
);

export default SignupFormHeader;