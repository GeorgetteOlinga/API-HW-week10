import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <nav>
        <ul>
            <Link to="/">Home</Link>
        </ul>
        <ul>
            <Link to="/about">About</Link>
        </ul>
        <ul>
            <Link to="/nasalist">Search</Link>
        </ul>
    </nav>
  )
}