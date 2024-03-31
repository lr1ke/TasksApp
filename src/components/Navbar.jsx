import {NavLink} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <NavLink to='/' 
            style={({isActive}) => {
                return { color: isActive ? 'red' : 'grey' };
                }}>Generator
            </NavLink>
            <NavLink to='/todo' style={({isActive}) => {
                return { color: isActive ? 'red' : 'grey' };
                }}>To Do
            </NavLink>
            <NavLink to='/completed'style={({isActive}) => {
                return { color: isActive ? 'red' : 'grey' };
                }}>Completed
            </NavLink>



        </nav>

    )
}

export default Navbar; 