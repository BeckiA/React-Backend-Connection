import { useEffect, useState } from "react"
import axios from 'axios'

interface User{
  id: number,
  name: string
}
const App = () => {
  const [user, setUser]=useState<User[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(false);
  const existingUser = [...user]
  useEffect(()=>{
    // const controller = new AbortController();

    setLoading(true);
    axios.get<User[]>('https://jsonplaceholder.typicode.com/users')
    // axios.get<User[]>('https://jsonplaceholder.typicode.com/users', {signal: controller.signal})
    .then(res =>{
      setUser(res.data)
      setLoading(false)
    })
    .catch((err) => {
      // if(err instanceof CanceledError) return;
      setError(err.message),
      setLoading(false)
    })
    
  }, [])

  const deleteUser = (users : User) => {
  const filteredUser =user.filter(u => u.id !== users.id)
  axios.delete('https://jsonplaceholder.typicode.com/users/' + users.id)
  .catch(error => {
    setError(error.message)
    setUser(existingUser)
  })
  setUser(filteredUser)

   
  }

  const addUser =() =>{
    const newUser = {id:0, name: "Becki"}
    setUser([newUser,...user])
    axios.post('https://jsonplaceholder.typicode.com/users/', newUser)
    .then(({data: NewUser}) => setUser([NewUser,...user]))
    .catch((error) => {
      setError(error.message)
      setUser(existingUser)
    })
  }
  return (
    <>
    
    {isLoading && <div className="spinner-border"></div>}
    {error && <p className="text-danger">{error}</p>}
    <button className="btn btn-primary mb-3" onClick={addUser}>Add User</button>
    <ul className="list-group">
    {user.map(user =><li className="list-group-item d-flex justify-content-between" key={user.id}>{user.name} <button className="btn btn-outline-danger " onClick={() => deleteUser(user)}>Delete</button></li>) }
    </ul>


    </>
  )
}

export default App