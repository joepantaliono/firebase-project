import { useState, useEffect } from 'react';
import { db } from './firebase-config';
import { collection, getDocs, addDoc } from '@firebase/firestore';

function App() {
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState(0);
  const [users, setUsers] = useState([]);
  const collectionReference = collection(db, "users");

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(collectionReference);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }
    getUsers();
  }, [collectionReference])

  const createUser = async () => {
    await addDoc(collectionReference, {
      name: newName,
      age: newAge
    })
  }

  return (
    <div className="App">
      <input
        type="text"
        placeholder="name:" 
        onChange={(event) => {
          setNewName(event.target.value);
      }}/>
      <input
        type="number"
        placeholder="age:"
        onChange={(event) => {
          setNewAge(event.target.value);
        }} />
      <button onClick={createUser}>create user</button>
      {users.map((user) => {
        return <div>
          <h1>name: {user.name}</h1>
          <h1>age: {user.age}</h1>
          <button>edit/update</button>
          <button>delete</button>
          </div>
      })}
    </div>
  );
}

export default App;
