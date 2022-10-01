import logo from './logo.svg';
import './App.css';
import Notifications from './components/Notifications';

function App() {
  let notifications = [
    {
        id: 1,
        username: 'Rufet Nuriyev',
        image: 'avatar-angela-gray.webp',
        move: 'followed you',
        note: 'Chess club',
        date: '5m ago',
        readable: false,
        message: '  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil voluptates necessitatibus accusantium numquam, assumenda aliquid consectetur. Eaque porro sunt vero, ad tempora excepturi eligendi quo quae aut nobis minima? Debitis'
    },
    {
        id: 2,
        username: 'Muxtar Bayramov',
        image: 'avatar-jacob-thompson.webp',
        move: 'followed you',
        note: 'Chess club',
        date: '5m ago',
        readable: true,
        // message: '  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil voluptates necessitatibus accusantium numquam, assumenda aliquid consectetur. Eaque porro sunt vero, ad tempora excepturi eligendi quo quae aut nobis minima? Debitis'
    },
    {
        id: 3,
        username: 'Aysel Quliyeva',
        image: 'avatar-nathan-peterson.webp',
        move: 'followed you',
        note: 'Chess club',
        date: '5m ago',
        readable: true,
        message: '  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil voluptates necessitatibus accusantium numquam, assumenda aliquid consectetur. Eaque porro sunt vero, ad tempora excepturi eligendi quo quae aut nobis minima? Debitis'
    },
    {
      id: 4,
      username: 'Aysel Quliyeva',
      image: 'avatar-nathan-peterson.webp',
      move: 'followed you',
      note: 'Chess club',
      date: '5m ago',
      readable: true,
      message: '  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil voluptates necessitatibus accusantium numquam, assumenda aliquid consectetur. Eaque porro sunt vero, ad tempora excepturi eligendi quo quae aut nobis minima? Debitis'
  }

]
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
