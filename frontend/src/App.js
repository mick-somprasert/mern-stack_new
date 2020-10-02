import React from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import { Container } from 'reactstrap';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import Home from './components/Home';
import Products from './components/Products';
import Profile from './components/Profile';
import Users from './components/Users';
import Login from './components/Login';
import Register from './components/Register';
import FileUpload from './components/FileUpload';
import Category from './components/Category';


function App() {
  return (
    <div>
      <Header />
      <Container fluid={true}>
        <Route path="/" exact={true} component={Home} />
        <Route path="/about" exact={true} component={About} />
        <Route path="/products" exact={true} component={Products} />
        <Route path="/profile" exact={true} component={Profile} />
        <Route path="/users" exact={true} component={Users} />
        <Route path="/login" exact={true} component={Login} />
        <Route path="/register" exact={true} component={Register} />
        <Route path="/fileupload" exact={true} component={FileUpload} />
        <Route path="/category" exact={true} component={Category}/>
      </Container>
      <Footer />
    </div>
  );
}
export default App;