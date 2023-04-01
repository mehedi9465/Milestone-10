import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Login from './components/login/Login';
import PrivateRoute from './components/privateRoute/PrivateRoute';
import Register from './components/register/Register';
import Shipping from './components/shipping/Shipping';
import AuthProvider from './context/AuthProvider';
import initializeAuthentication from './firebase/firebase.Initialize';

initializeAuthentication();

function App() {
  return (
    <div className='App'>
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route exact path='/register'>
              <Register></Register>
            </Route>
            <PrivateRoute exact path='/shipping'>
              <Shipping></Shipping>
            </PrivateRoute>
          </Switch>
        </BrowserRouter>   
      </AuthProvider> 
    </div>
  );
}

export default App;
