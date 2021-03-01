import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import ProSaasCard from '../../../components/Common/ProSaasCard';
import Card from '../../../components/Common/Card';

const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  border: 1px solid black;
  max-width: 24rem;
  width: 100%;
`;

const RoleText = styled.div`
  padding-top: 0.4rem;
  padding-bottom: 0.4rem;
  font-size: 1.075rem;
  font-weight: 500;
  color: black;
`;

const StyledLink = styled.div`
  color: black;
  font-size: 1.3rem;
  font-weight: 500;
`;

const DummyData = [
  { app_id: 1, app_name: 'app3' },
  { app_id: 2, app_name: 'app4' }
];

const TeamApps = () => {
  const [teamApps, setTeamApps] = useState(DummyData); //eslint-disable-line

  return (
    <div>
      <h1>Team Apps:</h1>
      <ProSaasCard title="Multi User Apps Only Available in Pro Version" />
      {teamApps &&
        teamApps.map((app) => (
          <Link key={app.app_id} to={`/app/${app.app_id}/dashboard`} state={{ app }}>
            <StyledCard>
              <StyledLink>{app.app_name}</StyledLink>
              <RoleText>Role: user</RoleText>
            </StyledCard>
          </Link>
        ))}
    </div>
  );
};

export default TeamApps;
