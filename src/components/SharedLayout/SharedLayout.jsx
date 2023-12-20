import { Suspense } from 'react';

import { NavLink, Outlet } from 'react-router-dom';

import css from './SharedLayout.module.css';

const SharedLayout = () => {
  return (
    <div className={css.box}>
      <header className={css.header}>
        <nav className={css.nav}>
          <ul className={css.list}>
            <li className={css.item}>
              <NavLink to="/" className={css.link}>
                Home
              </NavLink>
            </li>
            <li className={css.item}>
              <NavLink to="/movies" className={css.link}>
                Movies
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default SharedLayout;
