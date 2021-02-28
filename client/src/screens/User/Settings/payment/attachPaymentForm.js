import React from 'react';
import { FaRegCreditCard } from 'react-icons/fa';
import styled from 'styled-components';

import { colors } from '../../../../styles/theme';

import Card from '../../../../components/Common/Card';
import Button from '../../../../components/Common/buttons/PrimaryButton';

import visa from '../../../../assets/images/credit card icons/visa.png';
import discover from '../../../../assets/images/credit card icons/discover.png';
import mastercard from '../../../../assets/images/credit card icons/mastercard.png';
import american_express from '../../../../assets/images/credit card icons/american_express.png';

const ButtonWrapper = styled.div`
  padding-top: 2rem;
  padding-bottom: 1rem;
  background-color: ${colors.white};
  text-align: left;
`;

const Header = styled.h2`
  margin-bottom: 4rem;
`;

const StyledCardDisplayWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 1rem;
  padding: 1rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  margin-bottom: 1rem;
`;

const StyledCardDisplay = styled.div`
  font-size: 1.075rem;
  border-radius: 1rem;
  padding: 0.5rem;
  background-color: darkblue;
  color: white;
  font-weight: 500;
  width: 14rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  margin: 1rem;
  cursor: pointer;
  border: ${(props) => (props.isActive ? '4px solid lightblue' : null)};
`;

const CardNumber = styled.div`
  font-size: 1.3rem;
  padding-left: 0.5rem;
`;

const Expires = styled.div`
  padding-left: 0.5rem;
`;

const SecondCardRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CardBrandImage = styled.img`
  padding-right: 0.5rem;
`;

const payCards = [{ id: 1, card: { last4: 1234, exp_month: 2, exp_year: 2023, brand: 'visa' } }];

const AttachPaymentForm = () => {
  const setIcons = (brand) => {
    switch (brand) {
      case 'visa':
        return <CardBrandImage src={visa} alt="" />;
      case 'amex':
        return <CardBrandImage src={american_express} alt="" />;
      case 'discover':
        return <CardBrandImage src={discover} alt="" />;
      case 'mastercard':
        return <CardBrandImage src={mastercard} alt="" />;
      default:
        return <FaRegCreditCard />;
    }
  };

  return (
    <div>
      <Card>
        {payCards.map((item) => (
          <StyledCardDisplayWrapper key={item.id}>
            <StyledCardDisplay>
              <CardNumber>**** **** **** {item.card.last4}</CardNumber>
              <SecondCardRow>
                <Expires>
                  {item.card.exp_month}/{item.card.exp_year.toString().slice(-2)}
                </Expires>
                {setIcons(item.card.brand)}
              </SecondCardRow>
            </StyledCardDisplay>
          </StyledCardDisplayWrapper>
        ))}
      </Card>
      <Card>
        <Header>Add a Payment Method</Header>
        <div>
          <ButtonWrapper>
            <Button type="submit">Add</Button>
          </ButtonWrapper>
          <p>Adding a card will make it the default payment method</p>
        </div>
      </Card>
    </div>
  );
};

export default AttachPaymentForm;
