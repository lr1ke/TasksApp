import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const SharedLayout = () => {
    return (
        <>
        <Navbar />
        <div className='container'>
        <Outlet />
        </div>
        </>
    )
    }

export default SharedLayout; 