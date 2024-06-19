import { useEffect, useState } from 'react'
import './App.css'
import ProductList from './components/ProductList'

const connect = () => console.log("Connecting");
const disConnect = () => console.log("Disconnecting");
function App() {

  // const [category, setCategory] = useState('');

  useEffect(() => {
    connect();
    return () => disConnect();
  })

  // const ref =useRef<HTMLInputElement>(null)

  // useEffect(()=> {
  // if(ref.current) ref.current.focus()
  // })

  // useEffect(() => {
  //   document.title = "App Intro"
  // })
  return (
    // <input ref={ref} type="text" className='form-control' />
    <>
    {/* <select  className="form-select" onChange={(event) => setCategory(event.target.value)}>
      <option selected></option>
      <option value={"Groceries"}>Groceries</option>
    <option value={"Clothings"}>Clothings</option>

    </select> */}
    {/* <ProductList category={category}/> */}
    </>
  )
}

export default App
