import React from 'react';
import styled from 'styled-components';
import Emoji, {EmojiWrapper} from './emoji';
import {darkGreen} from './colors';

const Footer = styled.footer`
  text-transform: Uppercase;
  font-size: 1.5em;
  color: white;
  padding: 30px 100px;
  text-align: right;
  width: 100vw;
  height: ${({height}) => height};
  background: ${darkGreen};
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
`;

const AlignedDiv = styled.div`
  display: flex;
  align-items: center;
`;

export default ({children, height}) => (
  <Footer height={height}>
    <AlignedDiv>
      {children}
      <span>
        <EmojiWrapper size="1.5em" marginRight="10px">
          🎧
        </EmojiWrapper>
        <a href="https://theconsolelog.com">The Console Log</a>
      </span>
    </AlignedDiv>

    <AlignedDiv>
      <EmojiWrapper size="1.5em" marginRight="10px">
        📒
      </EmojiWrapper>
      <a href="https://slides.slyterin.dev">slides.slytherin.dev</a>
    </AlignedDiv>

    <AlignedDiv>
      <Emoji name="twitter.png" size="1.5em" marginRight="10px" />
      <a href="https://twitter.com/matthewgerstman">@MatthewGerstman</a>
    </AlignedDiv>
  </Footer>
);
