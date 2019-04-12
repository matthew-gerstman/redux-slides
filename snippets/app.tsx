import React, {
  Component,
  lazy,
  Suspense
} from "react";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

const Slytherins = lazy(() =>
  import("./components/slytherins")
);
const GifsPage = lazy(() =>
  import("./giphy/gifs-page")
);
const MoviesPage = lazy(() =>
  import("./movies/movies-page")
);
const PodcastsPage = lazy(() =>
  import("./podcasts/podcasts-page")
);
const RssPage = lazy(() =>
  import("./rss/rss-page")
);
const TwitterPage = lazy(() =>
  import("./twitter/twitter-page")
);
const YoutubePage = lazy(() =>
  import("./youtube/youtube-page")
);

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Suspense
          fallback={<div>Loading Page...</div>}
        >
          <Route
            path="/gifs/:id/"
            render={({match}) => (
              <GifsPage
                slytherinId={match.params.id}
              />
            )}
          />
          <Route
            path="/movies/:id/"
            render={({match}) => (
              <MoviesPage
                slytherinId={match.params.id}
              />
            )}
          />
          <Route
            path="/podcasts/:id/"
            render={({match}) => (
              <PodcastsPage
                slytherinId={match.params.id}
              />
            )}
          />
          <Route
            path="/rss/:id/"
            render={({match}) => (
              <RssPage
                slytherinId={match.params.id}
              />
            )}
          />
          <Route
            path="/twitter/:id/"
            render={({match}) => (
              <TwitterPage
                slytherinId={match.params.id}
              />
            )}
          />
          <Route
            path="/youtube/:id/"
            render={({match}) => (
              <YoutubePage
                slytherinId={match.params.id}
              />
            )}
          />
          <Route
            exact
            path="/"
            render={() => <Slytherins />}
          />
        </Suspense>
      </Router>
    );
  }
}
export default App;
