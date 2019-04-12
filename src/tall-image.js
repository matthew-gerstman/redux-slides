import React from 'react';
import styled from 'styled-components';
import {FOOTER_HEIGHT} from './constants';

const TallImage = styled.img`
  height: calc(100vh - ${FOOTER_HEIGHT});
`;

export default ({src, ...props}) => <TallImage src={src} {...props} />;
