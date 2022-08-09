import React from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux'
import { AsyncDecrementCreator, AsyncIncrementCreator, decrementCreator, incrementCreator } from "./store/countReducer"
import { fetchUsers } from './store/userReducer';

function App() {
  const dispatch = useDispatch()
  const count = useSelector(state => state.countReduser.count)
  const users = useSelector(state => state.userReduser.users)

  return (
    <div className={'app'}>
      <div style={{ display: "flex" }}>
        {count}
        <button onClick={() => dispatch(AsyncIncrementCreator())}> Инкремент++ </button>
        <button onClick={() => dispatch(AsyncDecrementCreator())}> Декремент-- </button>
        <button onClick={() => dispatch(fetchUsers())}> Получить юзеров--- </button>
      </div>

      <div>
        {users.map(user =>
          <div key={user.id} style={{ fontSize: "2rem", marginTop: 20 }}>  
            {user.name}
          </div>)}
      </div>

    </div>
  );
}

export default App;
