import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Header from './components/common/Header';
import MainPage from './pages/MainPage';
import CardPage from './pages/CardPage';
import InputFormPage from './pages/InputFormPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path="/" render={() => <Redirect to="/main" />} />
      <Route path="/card" component={CardPage} />
      <Route path="/input" component={InputFormPage} />
      <Route exact path="/main" component={MainPage} />
    </div>
  );
}

export default App;
