import React, { useState } from 'react';

import styled from 'styled-components';

import ProSaasCard from '../../../../components/Common/ProSaasCard';
import SettingsHeader from '../../../../components/User/Navigation/settingsHeader';
import UpdatePaymentCard from './updatePaymentCard';
import AttachPaymentFormWrapper from './attachPaymentFormWrapper';

const Wrapper = styled.div``;

const Title = styled.h1`
  font-size: 1.5rem;
`;

const PaymentSettings = () => {
  const [isModalCard, setModalCard] = useState(false);

  /* eslint-disable */
  const [deletePaymentId, setDeletePaymentId] = useState();
  const [payCards, setPayCards] = useState([]);
  const [paymentRemoved, setPaymentRemoved] = useState(false);
  /* eslint-enable */

  /* 
      Stripe Methods
  */

  const deletePaymentMethod = async () => {};

  /* 
      Helper Methods
  */

  const handleModalCardCancel = () => {
    setModalCard(false);
  };

  return (
    <Wrapper>
      <SettingsHeader />
      <ProSaasCard title="Payment Settings Only Available in Pro Version" />
      <Title>Payment Settings</Title>

      <UpdatePaymentCard
        payCards={payCards}
        paymentRemoved={paymentRemoved}
        isModalCard={isModalCard}
        handleModalCardCancel={handleModalCardCancel}
        deletePaymentMethod={deletePaymentMethod}
        setDeletePaymentId={setDeletePaymentId}
        setModalCard={setModalCard}
      />

      <AttachPaymentFormWrapper />
    </Wrapper>
  );
};

export default PaymentSettings;
