import './App.css'

import { useEffect, useState } from 'react'
import Cardlist from './components/card-list/card-list.component'
import Searchbox from './components/search-box/search-box.component'
function App() {
  console.log('render')
  const [searchField, setSearchField] = useState('')
  const [monsters, setMonsters] = useState([])
  const [handle, setHandle] = useState('')

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users))
  }, [])

  const onSearchChange = (e) => {
    setSearchField(e.target.value.toLowerCase())
  }
  const filtered = monsters.filter((monster) => {
    return monster.name.toLowerCase().includes(searchField)
  })
  const clickHandle = () => {
    console.log('button state')
    setHandle('clicked')
  }

  return (
    <div className='App'>
      <button onClick={clickHandle}>Hello</button>
      <h1 className='header-font'>Monsters Rolodex</h1>
      <Searchbox
        placeholder={'search for monsters'}
        className={'search-box'}
        onChangeHandler={onSearchChange}
      ></Searchbox>
      <Cardlist monsters={filtered}></Cardlist>
    </div>
  )
}

export default App
