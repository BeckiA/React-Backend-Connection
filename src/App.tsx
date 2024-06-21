import { useEffect, useState } from "react"
import axios, { AxiosError, CanceledError } from 'axios'

interface User{
  id: number,
  name: string
}
const App = () => {
  const [user, setUser]=useState<User[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(false);
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
    // .finally(()=> setLoading(false)) Won't work in Strict Mode Enabled WHy?
    // Even Mosh didn't know that

    // const fetchUser = async() => {
    //   try{
    //     const res = await axios.get<User[]>('https://jsonplaceholder.typicode.com/xusers')
    //   setUser(res.data)
    //   }catch(err){
    //     setError((err as AxiosError).message)
    //   }
    // }

    // fetchUser()
    // return () => controller.abort()
  }, [])
  return (
    <>
    
    {isLoading && <div className="spinner-border"></div>}
    {error && <p className="text-danger">{error}</p>}
  <ul>{user.map(user =><li key={user.id}>{user.id} {user.name}</li>) }</ul>

    </>
  )
}

export default App