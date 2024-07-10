import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
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
import Cart from './Components/About/Cart'; // Import the Cart component

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

  const handleSignIn = (state) => {
    setIsSignedIn(state);
    localStorage.setItem('isSignedIn', 'true'); // Save sign-in state to local storage
  };

  // const handleSignOut = () => {
  //   setIsSignedIn(false);
  //   localStorage.setItem('isSignedIn', 'false'); // Clear sign-in state from local storage
  // };

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
        {isSignedIn ? (
          <>
            <Sidebar />
            <main className="main">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About addToCart={addToCart} cartItemsCount={cartItemsCount} />} />
                <Route path="/receipe" element={<Receipe />} />
                <Route path="/profile" element={<Profile user={user} />} />
                <Route path="/setting" element={<Setting />} />
                <Route path="/faq" element={<Faq />} />
                <Route path="/cart" element={<Cart cart={cart} setCart={setCart} deleteFromCart={deleteFromCart} />} />
              </Routes>
            </main>
          </>
        ) : (
          <>
            <Routes>
              <Route path="/" element={<SignIn onSignIn={handleSignIn} />} />
              <Route path="/signup" element={<SignUp onSignUp={handleSignUp} />} />
            </Routes>
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
