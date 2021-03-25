import React from 'react';
import { SubscriptionExists } from '../screens/Purchase';
import SEO from '../components/Marketing/Layout/seo';
import AltHeader from '../components/Purchase/Navigation/altHeader';

const SubscriptionExistsPage = () => {
  const seoData = {
    title: 'Saas Starter Kit v1 Subscription Exists page',
    description: 'Saas Starter Kit v1 Subscription Exists page'
  };
  return (
    <React.Fragment>
      <SEO seoData={seoData} />
      <div>
        <AltHeader />
        <SubscriptionExists />
      </div>
    </React.Fragment>
  );
};

export default SubscriptionExistsPage;
