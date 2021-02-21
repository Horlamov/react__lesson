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
  
  let dialogsData = [
    { id: 1, name: 'Dima'},
    { id: 2, name: 'Andrey'},
    { id: 3, name: 'Iron'},
    { id: 4, name: 'Petr'},
    { id: 5, name: 'Gena'},
    { id: 6, name: 'Sveta'}
  ]

  let messageData = [
    { id: 1, message: 'Yo!'},
    { id: 2, message: 'How is youк life?'},
    { id: 3, message: 'Hi!'},
    { id: 4, message: 'Yo'},
    { id: 5, message: 'YYYo'},
    { id: 6, message: 'yooooo!'}
  ]

  return (

    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
        <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
        <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
        <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />
        <DialogItem name={dialogsData[5].name} id={dialogsData[5].id} />
        
      </div>

      <div className={s.messages}>
        <Message message={messageData[0].message} />
        <Message message={messageData[1].message} />
        <Message message={messageData[2].message} />
        <Message message={messageData[3].message} />
      </div>
    </div>
  )
};

export default Dialogs;