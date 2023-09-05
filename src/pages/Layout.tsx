import NavBar from '../components/NavBar'
import { Outlet } from 'react-router-dom'
import { useState } from 'react';
import { GameQuery } from './HomePage';

const Layout = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <>
      <NavBar
        onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
      />
      <Outlet />
    </>
  );
}

export default Layout