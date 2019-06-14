import React from 'react';

import classes from './NavLinks.module.scss';
import NavLink from './NavLink/NavLink';

const navLinks = (props) => (
  <div className={classes.NavLinks}>
    <NavLink label='Partner Up' />
    <NavLink label='Games' />
    <NavLink href='/topics' label='Quizzes' />
    <NavLink label='Profile' />
  </div>
);

export default navLinks;