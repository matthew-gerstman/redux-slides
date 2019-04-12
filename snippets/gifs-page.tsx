import React from 'react';
import {connect} from 'react-redux';
import {Fetcher, StoreShape, GIPHY} from '../data/types';
import {fetchGifs} from './data/actions';
import {GiphyImage} from './data/api';
import {getGifsForId} from './data/selectors';
import {reducer} from './data/reducer';
import {CodeSplitProvider} from '../data/provider';

import './gifs-page.css';

type GifsPageOwnProps = {slytherinId: number};
type GifsPageStateProps = {gifs: GiphyImage[]};
type GifsPageDispatchProps = {fetchGifs: Fetcher};
type GifsPageProps = GifsPageOwnProps &
  GifsPageStateProps &
  GifsPageDispatchProps;

class GifsPage extends React.Component<GifsPageProps> {
  componentDidMount() {
    const {fetchGifs, slytherinId} = this.props;
    fetchGifs({slytherinId});
  }
  render() {
    const {gifs} = this.props;
    if (!gifs || gifs.length === 0) {
      return 'Loading...';
    }
    return (
      <div className="GifsPage">
        {gifs.map(gif => (
          <div key={gif.url}>
            <img src={gif.url} />
          </div>
        ))}
      </div>
    );
  }
}

const ConnectedGifsPage = connect<
  GifsPageStateProps,
  GifsPageDispatchProps,
  GifsPageOwnProps
>(
  (state: StoreShape, {slytherinId}: GifsPageOwnProps) => ({
    gifs: getGifsForId(state, slytherinId),
  }),
  {fetchGifs}
)(GifsPage);

export default function GifsWithProvider(props: GifsPageOwnProps) {
  return (
    <CodeSplitProvider reducers={{[GIPHY]: reducer}}>
      <ConnectedGifsPage {...props} />
    </CodeSplitProvider>
  );
}
