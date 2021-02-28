import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { useLocation } from '@reach/router';
import { FaRegCreditCard } from 'react-icons/fa';
import { navigate } from 'gatsby';
import { Spin } from 'antd';

import AuthContext from '../../../utils/authContext';
import ApiContext from '../../../utils/apiContext';
import axios from '../../../services/axios';
import { colors, breakpoints } from '../../../styles/theme';

import Button from '../../../components/Common/buttons/PrimaryButton';
import Card from '../../../components/Common/Card';
import visa from '../../../assets/images/credit card icons/visa.png';
import discover from '../../../assets/images/credit card icons/discover.png';
import mastercard from '../../../assets/images/credit card icons/mastercard.png';
import american_express from '../../../assets/images/credit card icons/american_express.png';

const Wrapper = styled.div`
  display: flex;
  background-color: ${colors.gray50};
  min-height: 100vh;
  margin-top: 2rem;

  @media (max-width: ${breakpoints.small}) {
    flex-direction: column;
    align-items: center;
  }
`;

const PaymentConfirm = styled.div`
  background-color: white;
  width: 30%;
  margin-right: 2rem;
  margin-left: 1rem;
  height: max-content;
  padding: 1rem;
  padding-bottom: 2rem;

  @media (max-width: ${breakpoints.small}) {
    flex-direction: column;
    margin: 1rem;
    width: 90%;
  }
`;

const PaymentInfo = styled.div`
  background-color: white;
  margin-left: 2rem;
  margin-right: 1rem;
  width: 70%;
  height: max-content;
  padding: 1rem;
  @media (max-width: ${breakpoints.small}) {
    margin: 1rem;
    width: 90%;
  }
`;

const ButtonWrapper = styled.div`
  padding-top: 2rem;
  padding-bottom: 1rem;
  background-color: ${colors.white};
  text-align: left;
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

const PaymentConfirmRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.3rem 0 0.3rem 0;
`;

const StyledHr = styled.hr`
  background-color: black;
  height: 2px;
`;

const CheckoutForm = () => {
  const location = useLocation();
  const { authState } = useContext(AuthContext);
  const { fetchFailure, fetchInit, fetchSuccess, apiState } = useContext(ApiContext);
  const { isLoading } = apiState;
  const [plan, setPlan] = useState();
  const [price, setPrice] = useState();
  const [planType, setPlanType] = useState();
  const [payCards, setPayCards] = useState([]);

  useEffect(() => {
    return () => fetchSuccess();
  }, []);

  useEffect(() => {
    getWallet();
  }, []);

  const getWallet = async () => {
    fetchInit();

    const cards = [{ id: 1, card: { last4: 1234, exp_month: 2, exp_year: 2023, brand: 'visa' } }];
    setPayCards(cards);
    setIcons(cards);
    fetchSuccess();
  };

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

  const createSubscription = async () => {
    fetchInit();

    navigate('/purchase/confirm');
  };

  return (
    <Wrapper>
      <PaymentInfo>
        <Spin tip="Loading" spinning={isLoading}>
          <h2>Please Choose Payment Method</h2>
          {!payCards.length == 0 ? (
            payCards.map((item) => (
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
            ))
          ) : (
            <div>
              <p>No Payment Methods Found</p>
            </div>
          )}
        </Spin>

        <Spin tip="Loading" spinning={isLoading}>
          <Card>
            <ButtonWrapper>
              <Button>Add Card</Button>
            </ButtonWrapper>
          </Card>
        </Spin>
      </PaymentInfo>

      <PaymentConfirm>
        <h3>
          <span>Purchasing</span> {planType} Plan
        </h3>

        <PaymentConfirmRow>
          <div>{planType}</div>
          <div>
            <strong>${price}/month</strong>
          </div>
        </PaymentConfirmRow>
        <StyledHr />
        <PaymentConfirmRow>
          <div>
            <strong>Subtotal</strong>
          </div>
          <div>${price}</div>
        </PaymentConfirmRow>
        <Button onClick={createSubscription}>Confirm</Button>
      </PaymentConfirm>
    </Wrapper>
  );
};

export default CheckoutForm;
