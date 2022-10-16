import { Icon } from './Icon'

export function Theme({ theme, changeTheme }) {
  const nextTheme = theme ? '' : 'light-theme'
  const nextIcon = theme ? 'moon' : 'sun'

  return (
    <li className="flex align-center" onClick={() => changeTheme(nextTheme)}>
      <button aria-label="Change theme">
        <Icon icon={nextIcon} />
      </button>
    </li>
  )
}