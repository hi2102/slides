import { SyntheticEvent, useState } from 'react';
import Menu from './Menu';
import MenuButton from './MenuButton';


function App() {
  const menuList = [ '1', '2', '3', '4', '5', '6', '7' ]
  const [visible, setVisible] = useState(false);

  const toggleMenu = (e: SyntheticEvent) => {
    setVisible(v => !v)
    e.stopPropagation();
  }

  return (
    <div>
      <MenuButton onClickToggle={toggleMenu}>Toggle</MenuButton>
      <Menu onMouseDown={toggleMenu} visibility={visible}/>
      <div>아이템 메뉴 리스트</div>
      <ul>
        {menuList.map((list) => <li key={list}>{list}. </li>)}
      </ul>
    </div>
  );
}

export default App;
