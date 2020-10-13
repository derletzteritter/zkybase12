import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import { FeedContainer } from '../components/Feed/components/FeedContainer'
import { HeaderContainer } from '../components/Header/HeaderContainer'
import { HomeContainer } from '../components/Home/components/HomeContainer';

export const Routes = () => {
  return (
    <Router>
      <HeaderContainer />
      <Switch>
        <div>
          <Route path="/" exact component={HomeContainer} /> 
          <Route path="/feed" component={FeedContainer}/>
        </div>
      </Switch>
    </Router>
  )
}
