import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setName } from './store/userSlice';
import './app.scss';

const App = () => {
  const dispatch = useDispatch();
  const userName = useSelector((state:any) => state.user.name);
  const [editing, setEditing] = useState(false);
  const [newName, setNewName] = useState(userName);

  const handleSave = () => {
    dispatch(setName(newName));
    setEditing(false);
  };

  return (
    <div className="mainBlock">
      {editing ? (
        <div className='nameBlock'>
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
          <button className='button' onClick={handleSave}>Сохранить</button>
        </div>
      ) : (
        <div>
          <h2 className='userName'>Имя пользователя: {userName}</h2>
          <button className='button' onClick={() => setEditing(true)}>Редактировать</button>
        </div>
      )}
    </div>
  );
};

export default App;