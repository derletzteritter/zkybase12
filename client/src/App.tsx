import React from 'react';
import './App.css';
import { Auth } from './components/Auth/Auth';
import { useAuth } from './components/Auth/hooks/useAuth';
import { Routes } from './Routes/Routes';

function App() {
  const { user } = useAuth();
  return (
    <div>
      {!user ? (<Auth />) : (<Routes />)}
    </div>
  );
}

export default App;
