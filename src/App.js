import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Receipe from './Components/Receipe/Receipe';
import Setting from './Components/Setting/Setting';
import SignIn from './Components/Login Form/Sign In/SignIn';
import Faq from './Components/FAQ/Faq';
import SignUp from './Components/Login Form/Sign Up/SignUp';
import Profile from './Components/Profile Page/Profile';
import Cart from './Components/About/Cart';
import ProtectedRoute from '../src/Components/ProtcectedRoute';

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const cartItemsCount = cart.length;

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    const signedInState = localStorage.getItem('isSignedIn') === 'true';
    if (storedUser && signedInState) {
      setUser(storedUser);
      setIsSignedIn(true);
    }
  }, []);

  const handleSignUp = (userData) => {
    setUser(userData);
    setIsSignedIn(true); // Automatically sign in the user after registration
    localStorage.setItem('user', JSON.stringify(userData)); // Save user data to local storage
    localStorage.setItem('isSignedIn', 'true'); // Save sign-in state to local storage
  };

  const handleSignIn = (email, password) => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser && storedUser.email === email && storedUser.password === password) {
      setIsSignedIn(true);
      setUser(storedUser);
      localStorage.setItem('isSignedIn', 'true'); // Save sign-in state to local storage
    } else {
      alert('Invalid email or password');
    }
  };

  const handleLogout = () => {
    setIsSignedIn(false);
    setUser(null);
    setCart([]);
    localStorage.removeItem('user'); // Remove user data from local storage
    localStorage.removeItem('isSignedIn'); // Remove sign-in state from local storage
    localStorage.removeItem('cart'); // Remove cart from local storage
  };

  const deleteFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  return (
    <Router>
      <div className='app'>
        <Sidebar />
        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/signin" element={<SignIn onSignIn={handleSignIn} />} />
            <Route path="/signup" element={<SignUp onSignUp={handleSignUp} />} />
            <Route path="/about" element={
              <ProtectedRoute isSignedIn={isSignedIn}>
                <About addToCart={addToCart} cartItemsCount={cartItemsCount} />
              </ProtectedRoute>
            } />
            <Route path="/receipe" element={
              <ProtectedRoute isSignedIn={isSignedIn}>
                <Receipe />
              </ProtectedRoute>
            } />
            <Route path="/profile" element={
              <ProtectedRoute isSignedIn={isSignedIn}>
                <Profile user={user} onLogout={handleLogout} />
              </ProtectedRoute>
            } />
            <Route path="/setting" element={
              <ProtectedRoute isSignedIn={isSignedIn}>
                <Setting onLogout={handleLogout} />
              </ProtectedRoute>
            } />
            <Route path="/cart" element={
              <ProtectedRoute isSignedIn={isSignedIn}>
                <Cart cart={cart} setCart={setCart} deleteFromCart={deleteFromCart} />
              </ProtectedRoute>
            } />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
