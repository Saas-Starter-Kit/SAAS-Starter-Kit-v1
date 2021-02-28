import React from 'react';
import styled, { keyframes } from 'styled-components';

import CheckoutForm from './checkoutForm';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(1rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Wrapper = styled.div`
  animation: ${fadeInUp} 0.7s ease-in forwards;
`;

const Purchase = () => {
  return (
    <Wrapper>
      <CheckoutForm />
    </Wrapper>
  );
};

export default Purchase;
