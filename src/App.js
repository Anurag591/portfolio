import React, { useState, useEffect } from 'react';

import { useHistory } from 'react-router-dom';

import Routing from './Routing';

import styled from 'styled-components';
import './App.css';
import Sidebar from './components/sidebar';

import { name, CURRENT_DESIGNATION } from './constant';

const Container = styled.div`
  display: flex;
`;

const RoutingContainer = styled.div`
  height: 100vh;
  width: 80vw;
  overflow: auto;

  @media (max-width: 720px) {
    width: 100vw;
  }
`;

const Toggle = styled.button`
  display: none;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 4px;
  right: 10px;
  background: #3cb1bd;
  padding: 15px;
  color: white;
  font-size: 20px;
  border-radius: 50%;
  border: none;
  z-index: 9;

  @media(max-width: 720px) {
    display: flex;
  }
`;

const RouteListener = (toggleSidebar) => {
  const location = useHistory();
  location.listen(_ => toggleSidebar(false));
};

function App() {

  useEffect(() => {
    window.document.title = `${ name }: ${ CURRENT_DESIGNATION }`;
  }, []);


  const [shouldVisible, setShouldVisible] = useState(false);
  const toggleSidebar = (state) => {
    setShouldVisible(state);
  }

  RouteListener(toggleSidebar);

  return (
    <Container>
      <Sidebar shouldVisible = {shouldVisible} />
      <Toggle onClick={() => toggleSidebar(!shouldVisible)}>
        <em className={`fas fa-${shouldVisible ? 'times' : 'bars'}`}></em>
      </Toggle>
      <RoutingContainer>
        <Routing />
      </RoutingContainer>
    </Container>
  );
}

export default App;
