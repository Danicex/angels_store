import React, { useState } from 'react';
import { CiLock } from "react-icons/ci";
import CRUDpage from './CRUDpage';

export default function AdminPage() {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem('authenticated') === 'true'
  );

  const checkPassword = () => {
    if (password === 'N-6)L!i%Cr:$CR9iA.?') {
      setIsAuthenticated(true);
      localStorage.setItem('authenticated', 'true');
    } else {
      alert('Incorrect password');
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('authenticated');
  };

  return (
    <div className='mt-3 w-4/5 m-auto max-sm:w-full max-sm:mx-2 overflow-hidden'>
      {isAuthenticated ? (
        <div>
          <header  className='flex w-full justify-between items-center'>

          <h2>Welcome to the CRUD Page</h2>
         
          <button onClick={logout}>Logout</button>
          </header>
          <CRUDpage/>
        </div>
      ) : (
        <div className='bg-gray-50 p-5 rounded-lg w-3/5 max-sm:w-4/5 m-auto mt-20'>
        <h1  className='text-4xl text-bold  text-center'><CiLock /></h1>
          <h2 className='text-2xl my-4'>Enter Password to Access</h2>
        <small className='my-3 text-blue-400'>is this angel? prove it !!</small>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              checkPassword();
            }}
          >
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className='py-3 px-2 w-full outline-none'
            /> <br />
            <button type="submit" className='py-2 px-3 my-4'>Submit</button>
          </form>
        </div>
      )}
    </div>
  );
}
