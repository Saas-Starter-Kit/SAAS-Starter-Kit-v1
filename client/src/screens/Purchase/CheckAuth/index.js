import React, { useEffect, useContext } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import AuthContext from '../../../utils/authContext';
import { colors, breakpoints } from '../../../styles/theme';

import Card from '../../../components/Purchase/purchaseCard';

const CardWrapper = styled.div`
  margin-top: 3rem;
  width: 38rem;
  margin-right: auto;
  margin-left: auto;
  text-align: center;
  @media (max-width: ${breakpoints.small}) {
    width: 90%;
  }
`;

const StyledHeader = styled.h1`
  padding-bottom: 2rem;
`;

const StyledSection = styled.div`
  margin-bottom: 1.2rem;
  font-size: 1.4rem;
  font-weight: 500;
`;

const StyledLink = styled(Link)`
  color: ${colors.indigo600};
`;

const CheckAuth = () => {
  const { authState } = useContext(AuthContext);

  useEffect(() => {
    if (authState.user) {
      if (authState.user.subscription_id) {
        //Navigate here if user has subscription
        //navigate('/subscriptionexists');
      } else if (authState.isAuthenticated) {
        //Else navigate to plan select
        //navigate('/purchase/plan');
      }
    }
  }, [authState]);

  return (
    <div>
      <CardWrapper>
        <Card>
          <StyledSection>
            <div>Continue To Plan Select</div>
            <StyledLink to="/purchase/plan">Submit</StyledLink>
          </StyledSection>
          <StyledSection>
            <div>See Subscription Exists Page</div>
            <StyledLink to="/subscriptionexists">Submit</StyledLink>
          </StyledSection>
          <StyledHeader>Please Sign-in or Sign-up to continue</StyledHeader>
          <StyledSection>
            <div>Already Have an account? login below</div>
            <StyledLink to="/auth/login" state={{ isPaymentFlow: true }}>
              Login
            </StyledLink>
          </StyledSection>
          <StyledSection>
            <div>Need to create an account? click below</div>
            <StyledLink to="/auth/signup">Signup</StyledLink>
          </StyledSection>
        </Card>
      </CardWrapper>
    </div>
  );
};

export default CheckAuth;
