import { useEffect, useState } from "react"
import axios, { AxiosError } from 'axios'

interface User{
  id: number,
  name: string
}
const App = () => {
  const [user, setUser]=useState<User[]>([]);
  const [error, setError] = useState('');
  useEffect(()=>{
    // axios.get<User[]>('https://jsonplaceholder.typicode.com/xusers')
    // .then(res => setUser(res.data))
    // .catch((err) => setError(err.message))
    const fetchUser = async() => {
      try{
        const res = await axios.get<User[]>('https://jsonplaceholder.typicode.com/xusers')
      setUser(res.data)
      }catch(err){
        setError((err as AxiosError).message)
      }
    }

    fetchUser()
  }, [])
  return (
    <>
    
    {error && <p className="text-danger">{error}</p>}
  <ul>{user.map(user =><li key={user.id}>{user.id} {user.name}</li>) }</ul>

    </>
  )
}

export default App