import './card-list.styles.css'
import Cardcontainer from './cardcontainer'

function Cardlist({ monsters }) {
  return (
    <div key={monsters.id} className='card-list'>
      {monsters.map((monster) => {
        return <Cardcontainer monster={monster}></Cardcontainer>
      })}
    </div>
  )
}

export default Cardlist
