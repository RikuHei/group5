import React from 'react';
import { inject, observer } from 'mobx-react';
import GameButton from './GameButton';
import styled from 'styled-components';

const StyledGameList = styled.div`
  text-align: center;
  outline: black 1px;
`;

const GameList = props => {
  const { appStore } = props.rootStore;

  return (
    <StyledGameList>
      <GameButton
        link={'/counter-strike-global-offensive'}
        logo={
          'https://cdn.faceit.com/games/landing-page/game-boxes/csgo-background.jpg'
        }
        title={'CS: GO'}
      />
      <GameButton
        link={'/dota2'}
        logo={
          'https://cdn.faceit.com/games/landing-page/game-boxes/dota-background.jpg'
        }
        title={'DOTA 2'}
      />
      <GameButton
        link={'/league-of-legends'}
        logo={
          'https://cdn.faceit.com/games/landing-page/game-background/lol.jpg'
        }
        title={'League of Legends'}
      />
    </StyledGameList>
  );
};

export default inject('rootStore')(observer(GameList));