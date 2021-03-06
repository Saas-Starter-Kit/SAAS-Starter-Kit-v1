import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { Empty } from 'antd';

import AuthContext from '../../../utils/authContext';
import ApiContext from '../../../utils/apiContext';
import { breakpoints } from '../../../styles/theme';
import axios from '../../../services/axios';

import LoadingOverlay from '../../../components/Common/loadingOverlay';
import DeleteAppModal from './DeleteAppModal';
import Card from '../../../components/Common/Card';
import Button from '../../../components/Common/buttons/PrimaryButton';

import DangerButton from '../../../components/Common/buttons/DangerButton';
import TextInput from '../../../components/Common/forms/TextInput';
import FieldLabel from '../../../components/Common/forms/FieldLabel';
import TextInputWrapper from '../../../components/Common/forms/TextInputWrapper';

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: ${breakpoints.medium}) {
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  border: 1px solid black;
  max-width: 24rem;
  width: 100%;
`;

const CreateAppWrapper = styled.div`
  width: 24rem;
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

const AppsSection = styled.div`
  margin: 0;
  @media (min-width: ${breakpoints.medium}) {
    margin-right: 5rem;
  }
`;

const StyledHeader = styled.h1`
  text-align: center;
  @media (min-width: ${breakpoints.medium}) {
    text-align: left;
  }
`;

const AppsWrapper = styled.div`
  width: 24rem;
  padding-bottom: 3rem;
`;

const Dashboard = () => {
  const { authState } = useContext(AuthContext);
  const { fetchFailure, fetchInit, fetchSuccess, apiState } = useContext(ApiContext);
  const { isLoading } = apiState;
  const [apps, setApps] = useState([]);
  const [isModal, setModal] = useState(false);
  const [deleteAppId, setDeleteAppId] = useState();

  /* eslint-disable */
  useEffect(() => {
    if (authState.user) {
      getApps();
    }
  }, [authState]);
  /* eslint-enable */

  const getApps = async () => {
    let user_id = authState.user.id;

    let params = {
      user_id
    };

    const result = await axios.get(`/api/get/app`, { params }).catch((err) => {
      fetchFailure(err);
    });

    console.log(result);
    let apps = result.data;

    setApps(apps);
    fetchSuccess();
  };

  const postApp = async (event) => {
    event.preventDefault();
    fetchInit();

    let name = event.target.name.value;
    let user_id = authState.user.id;

    let data = {
      name,
      user_id
    };

    await axios.post(`/api/post/app`, data).catch((err) => {
      fetchFailure(err);
    });

    fetchSuccess();
    getApps();
  };

  const deleteApp = async () => {
    setModal(false);
    fetchInit();
    let params = { app_id: deleteAppId };

    await axios.delete('/api/delete/app', { params });

    getApps();
    fetchSuccess();
  };

  const handleModalCancel = () => {
    setModal(false);
  };

  const handleDeleteAppModal = (app_id) => {
    setDeleteAppId(app_id);
    setModal(true);
  };

  return (
    <div>
      {isLoading && <LoadingOverlay />}
      <StyledHeader>Dashboard</StyledHeader>
      <ContentWrapper>
        <AppsSection>
          <h2>My Apps:</h2>
          <AppsWrapper>
            {!apps.length === 0 ? (
              apps.map((app) => (
                <StyledCard key={app.app_id}>
                  <Link to={`/app/${app.app_id}/dashboard`} state={{ app }}>
                    <StyledLink>{app.app_name}</StyledLink>
                  </Link>
                  <RoleText>Role: admin</RoleText>
                  <DangerButton onClick={() => handleDeleteAppModal(app.app_id)}>
                    Delete
                  </DangerButton>
                </StyledCard>
              ))
            ) : (
              <Empty />
            )}
          </AppsWrapper>
        </AppsSection>
        <CreateAppWrapper>
          <h2>Create App:</h2>
          <form onSubmit={postApp}>
            <StyledCard>
              <TextInputWrapper>
                <FieldLabel htmlFor="name">
                  Create:
                  <TextInput type="text" name="name" />
                </FieldLabel>
              </TextInputWrapper>
              <Button type="submit">Save</Button>
            </StyledCard>
          </form>
        </CreateAppWrapper>
      </ContentWrapper>
      <DeleteAppModal
        handleModalCancel={handleModalCancel}
        isModal={isModal}
        deleteApp={deleteApp}
      />
    </div>
  );
};

export default Dashboard;
