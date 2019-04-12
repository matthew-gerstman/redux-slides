import React, {Fragment, Component} from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import {modes} from 'mdx-deck/dist/constants';
import Footer from './footer';
import {lightBlue} from './colors';

const footerHeight = '80px';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,800');
	a {
		color: white;
		text-decoration: none;
	}

	ul {
		list-style: none;
		text-align: left;
		font-size: 1.5em;
	}

	li {
		padding-top: 10px;
	}
	h1 {
		text-transform: uppercase;
		font-size: 3em;
	}
`;

const Wrapper = styled.main`
  width: 100vw;
  height: calc(100vh - ${footerHeight});
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  position: relative;
`;

const Bar = styled.div`
  background: white;
  height: 2px;
  width: ${props => 100 * props.size}%;
  position: fixed;
  bottom: ${footerHeight};
`;

export default class Provider extends React.Component {
  render() {
    const {children, mode, index, length, update} = this.props;

    if (mode !== modes.normal) {
      return <Fragment>{children}</Fragment>;
    }

    return (
      <Fragment>
        <GlobalStyle />
        <Wrapper>{children}</Wrapper>
        <Bar size={(index + 1) / length} />
        <Footer height={footerHeight} />
      </Fragment>
    );
  }
}
