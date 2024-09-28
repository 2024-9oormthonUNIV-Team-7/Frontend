import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Landing from '../pages/landing';
import Plans from '../pages/plans';
import Drinking from '../pages/drinking';
import IceBreaking from '../pages/icebreaking';
import SmallTalk from '../pages/smallTalk';
import BalanceGame from '../pages/balanceGame';
import ContentRecommendation from '../pages/contentRecommendation';
import MiniGame from '../pages/miniGame';
import TeamProject from '../pages/teamProject';
import NetworkingParty from '../pages/networkingParty';
import Favorite from 'pages/favorite';
import Developer from 'pages/developer';
import PrivateRoute from './private-app-routes';

const AppRoutes: React.FC = () => {
  return (
    <Switch>
      {/* Public Route: Landing Page */}
      <Route exact path="/" component={Landing} />

      {/* Private Routes: Only accessible when logged in */}
      <PrivateRoute exact path="/plans" component={Plans} />
      <PrivateRoute exact path="/favorite" component={Favorite} />
      <PrivateRoute exact path="/dev" component={Developer} />
      <PrivateRoute exact path="/plans/ice-breaking" component={IceBreaking} />
      <PrivateRoute exact path="/plans/ice-breaking/balance-game" component={BalanceGame} />
      <PrivateRoute path="/plans/ice-breaking/small-talk" component={SmallTalk} />
      <PrivateRoute path="/plans/ice-breaking/mini-game" component={MiniGame} />
      <PrivateRoute exact path="/plans/content-recommendation" component={ContentRecommendation} />
      <PrivateRoute exact path="/plans/content-recommendation/drinking" component={Drinking} />
      <PrivateRoute path="/plans/content-recommendation/team-project" component={TeamProject} />
      <PrivateRoute path="/plans/content-recommendation/networking-party" component={NetworkingParty} />
      
      {/* Fallback Route: Redirect all other routes to Landing if not logged in */}
      <Route path="*">
        <Redirect to="/" />
      </Route>
    </Switch>
  );
};

export default AppRoutes;