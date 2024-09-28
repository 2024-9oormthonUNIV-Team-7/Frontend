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

const AppRoutes: React.FC = () => {
  return (
    <Switch>
      {/* Public Route: Landing Page */}
      <Route exact path="/" component={Landing} />

      {/* Routes: Accessible to all users */}
      <Route exact path="/plans" component={Plans} />
      <Route exact path="/favorite" component={Favorite} />
      <Route exact path="/dev" component={Developer} />
      <Route exact path="/plans/ice-breaking" component={IceBreaking} />
      <Route exact path="/plans/ice-breaking/balance-game" component={BalanceGame} />
      <Route path="/plans/ice-breaking/small-talk" component={SmallTalk} />
      <Route path="/plans/ice-breaking/mini-game" component={MiniGame} />
      <Route exact path="/plans/content-recommendation" component={ContentRecommendation} />
      <Route exact path="/plans/content-recommendation/drinking" component={Drinking} />
      <Route path="/plans/content-recommendation/team-project" component={TeamProject} />
      <Route path="/plans/content-recommendation/networking-party" component={NetworkingParty} />
      
      {/* Fallback Route: Redirect all other routes to Landing */}
      <Route path="*">
        <Redirect to="/" />
      </Route>
    </Switch>
  );
};

export default AppRoutes;