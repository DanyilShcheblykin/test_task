import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { UserState, setName } from "./store/userSlice";
import "./app.scss";

export interface RootState {
  user: UserState;
}

const App = () => {
  const dispatch = useDispatch();
  const userName = useSelector((state: RootState) => state.user.name);
  const [editing, setEditing] = useState(false);
  const [newName, setNewName] = useState("");

  useEffect(() => {
    const storedName = localStorage.getItem("userName");
    if (storedName) {
      dispatch(setName(storedName));
      setNewName(storedName);
    }
  }, [dispatch]);

  const handleSave = () => {
    dispatch(setName(newName));
    localStorage.setItem("userName", newName);
    setEditing(false);
  };

  return (
    <div className="mainBlock">
      {editing ? (
        <div className="nameBlock">
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
          <button className="button" onClick={handleSave}>
            Сохранить
          </button>
        </div>
      ) : (
        <div>
          <h2 className="userName">Имя пользователя: {userName}</h2>
          <button className="button" onClick={() => setEditing(true)}>
            Редактировать
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
