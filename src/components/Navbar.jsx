import {NavLink} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <NavLink to='/' 
            style={({isActive}) => {
                return { color: isActive ? 'red' : 'white' };
                }}>Generator
            </NavLink>
            <NavLink to='/todo' style={({isActive}) => {
                return { color: isActive ? 'red' : 'white' };
                }}>To Do
            </NavLink>
            <NavLink to='/completed'style={({isActive}) => {
                return { color: isActive ? 'red' : 'white' };
                }}>Completed
            </NavLink>



        </nav>

    )
}

export default Navbar; 