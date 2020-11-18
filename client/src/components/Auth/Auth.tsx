import { Button } from '@material-ui/core'
import React from 'react'
import { useAuth } from './hooks/useAuth'

export const Auth = () => {
  const { setUser } = useAuth();

  const handleLogin = () => {
    setUser(true)
  }

  return (
    <div>
      <input></input>
      <Button onClick={handleLogin}>Login / Signup</Button>
    </div>
  )
}
