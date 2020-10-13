import React from 'react';
import {NavLink}from 'react-router-dom';

export const HomeContainer = () => {
  return (
    <div>
      Klikk her for din lage din første post
      <NavLink to="/post">
        <button>
          Post
        </button>
      </NavLink>
    </div>
  )
}
