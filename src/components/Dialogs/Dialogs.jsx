import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const Dialogs = (props) => {
  return (

    <div className={s.dialogs}>
      <div className={s.dialogsitems}>
        <div className={s.dialog + ' ' + s.activ}>
          <NavLink to=''>Dima </NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to=''> Andrey </NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to=''>Iron </NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to=''>Petr </NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to=''>Gena </NavLink>
        </div>
      </div>

      <div className={s.messages}>
        <div className={s.message}>Hi</div>
        <div className={s.message}>How is your life?</div>
        <div className={s.message}>WHATSUP!!!</div>
      </div>
    </div>
  )
};

export default Dialogs;