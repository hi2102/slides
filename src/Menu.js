
import './Menu.css'

export default function Menu({onMouseDown, visibility}) {
  const viewState = (visibility === true) ? 'show' : 'hide'
  const menus = ['Home', 'About', 'Contact', 'Search'];
  
  return <ul id='flyout_menu' className={viewState} onClick={onMouseDown}>
    {menus.map((menu) => <li key={menu}><h2><a href='/'>{menu}</a></h2></li>)}
  </ul>
}