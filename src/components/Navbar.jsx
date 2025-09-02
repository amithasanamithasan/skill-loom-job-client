
import { Link } from 'react-router-dom'
import logo from '../assets/images/Siri Animation.gif'
import { useContext } from 'react'
import { AuthContext } from '../Provider/AuthProvider'
const Navbar = () => {
const { user }=useContext(AuthContext);
  return (
    <div className='navbar shadow-sm container px-4 mx-auto border rounded-full bg-gray-100'>
      <div className='flex-1'>
        <Link to='' className='flex gap-2 items-center'>
          <img className='w-auto h-7' src={logo} alt='Logo' style={{width:"40px", height:"40px"}} />
          <span className='font-bold font-serif'>Skill Loom Job</span>
        </Link>
      </div>
      <div className='flex-none'>
        <ul className='menu menu-horizontal px-1'>
          <li>
            <Link to=''>Home</Link>
          </li>
          <li>
            <Link to=''>All Jobs</Link>
          </li>
          { !user && ( 
            <li>
              <Link to='/login'>Login</Link>
            </li>
            )}
   
        </ul>

    
        {user && (<div className='dropdown dropdown-end z-50'>
            <div
              tabIndex={0}
              role='button'
              className='btn btn-ghost btn-circle avatar'
            >
              <div title="" className='w-10 rounded-full'>
                <img
                  referrerPolicy='no-referrer'
                  alt='User Profile Photo'
                  src=""
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
            >
              <li>
                <Link to='' className='justify-between'>
                  Add Job
                </Link>
              </li>
              <li>
                <Link to=''>My Posted Jobs</Link>
              </li>
              <li>
                <Link to=''>My Bids</Link>
              </li>
              <li>
                <Link to=''>Bid Requests</Link>
              </li>
                 
                <li className='mt-2'>
                <button      
                  className='bg-gray-200 block text-center'
                >
                  Logout
                </button>
              </li>
           
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar