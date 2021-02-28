import React from 'react';
import Card from './Card';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-bottom: 2rem;
`;

const ProSaasCard = ({ title }) => {
  return (
    <Wrapper>
      <Card>
        <h2>{title}</h2>
        <h3> Click Below to Upgrade</h3>
        <div>Logo</div>
      </Card>
    </Wrapper>
  );
};

export default ProSaasCard;
