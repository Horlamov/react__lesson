import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';


const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={s.dialog + ' ' + s.activ}>
      <NavLink to={path}>{props.name} </NavLink>
    </div>
  )
}

const Message = (props) => {
  return <div className={s.dialog}>{props.message}</div>
}

const Dialogs = (props) => {
  return (

    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name="Dima" id="1" />
        <DialogItem name="Andrey" id="2" />
        <DialogItem name="Iron" id="3" />
        <DialogItem name="Petr" id="4" />
        <DialogItem name="Gena" id="5" />
        <DialogItem name="Sveta" id="6" />
      </div>

      <div className={s.messages}>
        <Message message="Hi" />
        <Message message="Yo" />
        <Message message="HiHey" />
      </div>
    </div>
  )
};

export default Dialogs;