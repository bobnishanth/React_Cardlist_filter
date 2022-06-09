import './search-box.styles.css'

function Searchbox({ className, placeholder, onChangeHandler }) {
  return (
    <input
      type='search'
      className={className}
      placeholder={placeholder}
      onChange={onChangeHandler}
    ></input>
  )
}

export default Searchbox
