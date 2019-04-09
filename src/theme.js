// example theme.js
import theme from 'mdx-deck/themes';
import Provider from './provider';

export default {
  // extends the default theme
  ...theme,
  Provider,
  // add a custom font
  font: 'OpenSans, sans-serif',
  colors: {
    text: 'white',
    background: '#343633',
    link: 'white',
  },
  a: {color: 'white', textDecoration: 'none'},
  h1: {
    textTransform: 'uppercase',
  },
  h2: {},
  p: {},
  weights: 400,
  img: {
    maxHeight: '80vh',
    maxWidth: '100%',
  },
};
