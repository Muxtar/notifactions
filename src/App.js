import logo from './logo.svg';
import './App.css';
import Notifications from './components/Notifications';
import { useContext } from 'react';
import { Context } from './components/Context';

function App() {
  let notifications = useContext(Context);
  return (
   <div className='main'>
      <h1></h1>
      <div className="head">
        <div className="left">
          <h2>Notifications <span className='number'>{notifications.length}</span></h2>
        </div>
        <div className="right">
          <p>Mark all as read</p>
        </div>
      </div>
      <div className="body">
        <Notifications notifications = {notifications}/>
      </div>
   </div>
  );
}

export default App;
