import { ListLink } from './ListLink'
import { Theme } from './Theme'

import '../styles/components/nav.sass'

export function Nav({ navItem, currentTheme, onChangeTheme, onChangeLanguage }) {
  const handleMenu = () => {
    document.getElementById('menu-hamburguer').classList.toggle("active")
    document.querySelector('.nav-list').classList.toggle("active")
  }

  return (
    <nav className="flex align-center justify-center">
      <button id="menu-hamburguer" class="menu-hamburguer align-center column" onClick={() => handleMenu()}>
        <span class="barra"></span>
        <span class="barra"></span>
        <span class="barra"></span>
      </button>
      <ul className="nav-list flex align-center justify-center" onClick={() => handleMenu()}>

        <ListLink text={navItem[0]} url={"#home"} classes="nav-link" />
        <ListLink text={navItem[1]} url={"#about"} classes="nav-link" />
        <ListLink text={navItem[2]} url={"#projects"} classes="nav-link" />
        <ListLink text={navItem[3]} url={"#contact"} classes="nav-link" />

        <Theme theme={currentTheme} changeTheme={onChangeTheme} />
        <li id="pt" className='lang' onClick={() => onChangeLanguage('pt')}>
          <button name="pt-BR">
            PT
          </button>
        </li>
        <li id="eng" className='lang' onClick={() => onChangeLanguage('en')}>
          <button name="en-US">
            EN
          </button>
        </li>
      </ul>
    </nav>
  )
}