import React from 'react';
import Card from './Card';
import styled from 'styled-components';
import Logo from '../Common/svgs/LargeLogo';

const Wrapper = styled.div`
  margin-bottom: 2rem;
`;

const LogoContainer = styled.div`
  margin-top: 2rem;
  margin-bottom: 1rem;
`;

const ProSaasCard = ({ title }) => {
  return (
    <Wrapper>
      <Card>
        <h2>{title}</h2>
        <h3> Click Below to Upgrade</h3>
        <a href="https://www.saasstarterkit.com/" target="_blank" rel="noopener noreferrer">
          <LogoContainer>
            <Logo />
          </LogoContainer>
        </a>
      </Card>
    </Wrapper>
  );
};

export default ProSaasCard;
