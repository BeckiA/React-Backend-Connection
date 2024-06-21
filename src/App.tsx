import { useEffect, useState } from "react"
import axios from 'axios'

interface User{
  id: number,
  name: string
}
const App = () => {
  const [user, setUser]=useState<User[]>([]);
  const [error, setError] = useState('');
  useEffect(()=>{
    axios.get<User[]>('https://jsonplaceholder.typicode.com/xusers')
    .then(res => setUser(res.data))
    .catch((err) => setError(err.message))

  }, [])
  return (
    <>
    
    {error && <p className="text-danger">{error}</p>}
  <ul>{user.map(user =><li key={user.id}>{user.id} {user.name}</li>) }</ul>

    </>
  )
}

export default App