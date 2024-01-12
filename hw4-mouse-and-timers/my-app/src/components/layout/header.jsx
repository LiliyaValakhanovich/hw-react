import { Link } from 'react-router-dom';
import './header.css';

export function Header (){
  return(
    <div className="header">
      <nav className='header-navigation'>
        <div className='link'><Link to={'/'} className='header-link'>Mouse</Link></div>
        <div className='link'><Link to={'/timers'} className='header-link'>Timers</Link></div>
      </nav>
    </div>
  )
}