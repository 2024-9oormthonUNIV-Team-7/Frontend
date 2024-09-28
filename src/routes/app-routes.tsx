import React from 'react';
import { Route, Switch } from 'react-router-dom';
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
import favorite from 'pages/favorite';
import developer from 'pages/developer';

const AppRoutes: React.FC = () => {
  return (
    <Switch>
      {/* 랜딩 페이지 */}
      <Route exact path="/" component={Landing} />

      {/* 플랜 페이지 */}
      <Route exact path="/plans" component={Plans} />

      {/* 즐겨찾기 페이지 */}
      <Route exact path="/favorite" component={favorite} />

      {/* 즐겨찾기 페이지 */}
      <Route exact path="/dev" component={developer} />

      {/* 아이스 브레이킹 페이지와 그 하위 페이지 */}
      <Route exact path="/plans/ice-breaking" component={IceBreaking} />
      <Route exact path="/plans/ice-breaking/balance-game" component={BalanceGame} />
      <Route path="/plans/ice-breaking/small-talk" component={SmallTalk} />
      <Route path="/plans/ice-breaking/mini-game" component={MiniGame} />

      {/* 상황별 컨텐츠 추천 페이지와 그 하위 페이지 */}
      <Route exact path="/plans/content-recommendation" component={ContentRecommendation} />
      <Route exact path="/plans/content-recommendation/drinking" component={Drinking} />
      <Route path="/plans/content-recommendation/team-project" component={TeamProject} />
      <Route path="/plans/content-recommendation/networking-party" component={NetworkingParty} />
    </Switch>
  );
};

export default AppRoutes;
