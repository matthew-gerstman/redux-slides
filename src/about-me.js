import React from 'react';
import Emoji, {EmojiWrapper} from './emoji';
import styled from 'styled-components';
import {darkGreen} from './colors';

const CenteredLi = styled.li`
  display: flex;
  align-items: center;
`;

export default function AboutMe() {
  return (
    <React.Fragment>
      <h1 style={{margin: 0}}>Matthew Gerstman</h1>
      <hr style={{borderColor: darkGreen}} />
      <ul style={{margin: 0}}>
        <CenteredLi>
          <Emoji size="40px" marginRight="30px" name="dropbox.svg" />
          Senior Software Engineer at Dropbox
        </CenteredLi>
        <CenteredLi>
          <EmojiWrapper size="40px" marginRight="30px">
            🗽
          </EmojiWrapper>{' '}
          NYC
        </CenteredLi>
        <CenteredLi>
          <Emoji size="40px" marginRight="30px" name="twitter.png" />
          <a href="https://twitter.com/MatthewGerstman">@MatthewGerstman</a>
        </CenteredLi>
        <CenteredLi>
          <EmojiWrapper size="40px" marginRight="30px">
            📺
          </EmojiWrapper>
          <a href="https://slides.slytherin.dev">slides.slytherin.dev</a>
        </CenteredLi>
      </ul>
    </React.Fragment>
  );
}
