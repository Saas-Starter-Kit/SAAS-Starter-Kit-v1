import React, { useState, useContext, useEffect } from 'react';

import styled from 'styled-components';

import ProSaasCard from '../../../../components/Common/ProSaasCard';
import SettingsHeader from '../../../../components/User/Navigation/settingsHeader';
import NullSubscriptionCard from './NullSubscriptionCard';
import CancelSubscriptionCard from './cancelSubscirptionCard';
import PaymentInformationCard from './paymentInformationCard';
import UpgradeSubscription from './upgradeSubscription';

const Wrapper = styled.div``;

const Title = styled.h1`
  font-size: 1.5rem;
`;

const SubscriptionSettings = () => {
  const [isModalSub, setModalSub] = useState(false);

  //stripe payment state
  const [subscriptionState, setSubscription] = useState();
  const [planType, setPlanType] = useState();
  const [price, setPrice] = useState();

  /* 
      Stripe Methods
  */

  const cancelSubscription = async () => {};

  /* 
      Helper Methods
  */

  const handleModalSubCancel = () => {
    setModalSub(false);
  };

  return (
    <Wrapper>
      <SettingsHeader />
      <ProSaasCard title="Subscription Settings Only Available in Pro Version" />
      <Title>Subscription Settings</Title>

      {!subscriptionState && <NullSubscriptionCard />}

      {subscriptionState && (
        <PaymentInformationCard
          planType={planType}
          price={price}
          subscriptionState={subscriptionState}
        />
      )}

      {subscriptionState && <UpgradeSubscription subscriptionState={subscriptionState} />}
      {subscriptionState && (
        <CancelSubscriptionCard
          setModalSub={setModalSub}
          isModalSub={isModalSub}
          handleModalSubCancel={handleModalSubCancel}
          cancelSubscription={cancelSubscription}
        />
      )}
    </Wrapper>
  );
};

export default SubscriptionSettings;
