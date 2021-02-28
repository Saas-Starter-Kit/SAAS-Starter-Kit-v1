import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { colors, breakpoints } from '../../../styles/theme';

const CardsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  @media (max-width: ${breakpoints.small}) {
    flex-direction: column;
    align-items: center;
  }
`;

const FeaturesWrapper = styled.div`
  margin-top: 1rem;
  padding: 0.2rem;
`;

const Feature = styled.div`
  padding-bottom: 0.2rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
`;

const PlanButton = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1.3rem;
  font-weight: 500;
  width: 11rem;
  background-color: blue;
  color: white;
  cursor: pointer;
`;

const PlanCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 16rem;
  padding: 2rem;
  background-color: white;
  border: ${(props) => (props.isActive ? 'solid 1px black' : '')};
  cursor: pointer;
  margin-bottom: 1rem;
  border-radius: 0.3rem;
  &:hover {
    border: solid 1px black;
    opacity: 85%;
  }
`;

const PlanHeader = styled.div`
  font-size: 1.2rem;
  font-weight: 900;
`;

const PlanPrice = styled.div`
  font-size: 0.9rem;
  font-weight: 900;
`;

const PurchaseHeader = styled.div`
  font-size: 1.125rem;
  font-weight: 700;
  color: ${colors.coolGray500};
  text-align: center;
`;

const PurchaseText = styled.div`
  font-size: 0.9rem;
  font-weight: 300;
  color: ${colors.coolGray500};
  text-align: center;
  padding-bottom: 1rem;
`;

const PlanSelect = () => {
  const premium_plan = 'price_xxxxxxxxx';
  const basic_plan = 'price_xxxxxxxxxxxxx';
  const premium_price = 20;
  const basic_price = 10;
  const premium_type = 'Premium';
  const basic_type = 'Basic';

  const [plan, setPlan] = useState(basic_plan);
  const [planType, setPlanType] = useState(basic_type);
  const [price, setPrice] = useState(basic_price);

  const selectPlan = (plan, price, type) => {
    setPlan(plan);
    setPrice(price);
    setPlanType(type);
  };

  return (
    <div>
      <PurchaseHeader>Buy SAAS Pro Now</PurchaseHeader>
      <PurchaseText>Main Benefit of product</PurchaseText>
      <CardsWrapper>
        <PlanCard
          isActive={plan == basic_plan}
          onClick={() => selectPlan(basic_plan, basic_price, basic_type)}
        >
          <PlanHeader>Basic Plan</PlanHeader>
          <PlanPrice>${basic_price}/month</PlanPrice>
          <FeaturesWrapper>
            <Feature>Feature 1</Feature>
            <hr />
            <Feature>Feature 2</Feature>
            <hr />
            <Feature>Feature 3</Feature>
            <hr />
          </FeaturesWrapper>
        </PlanCard>
        <PlanCard
          isActive={plan == premium_plan}
          onClick={() => selectPlan(premium_plan, premium_price, premium_type)}
        >
          <PlanHeader>Premium Plan</PlanHeader>
          <PlanPrice>${premium_price}/month</PlanPrice>
          <FeaturesWrapper>
            <Feature>Feature 1</Feature>
            <hr />
            <Feature>Feature 2</Feature>
            <hr />
            <Feature>Feature 3</Feature>
            <hr />
          </FeaturesWrapper>
        </PlanCard>
      </CardsWrapper>
      <ButtonWrapper>
        <Link to="/purchase/payment" state={{ plan, price, planType }}>
          <PlanButton>Submit</PlanButton>
        </Link>
      </ButtonWrapper>
    </div>
  );
};

export default PlanSelect;
