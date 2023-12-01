import { FaSearch } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import logo from '../assets/Logo700.png';

export default function Header() {
  const {currentUser} = useSelector(state => state.user)
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  //when we submit take the value from searchterm to link
  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('searchTerm', searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };
//when we change on link we change the searchTerm in the search input
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

  return (
    <header className='bg-slate-200 shadow-md'>
      <div className='flex justify-between items-center max-w-[74rem] mx-auto p-3'>
        

        <Link to='/' className='flex items-center gap-4' >
        <img src={logo} alt="logo" className='h-12 w-16' />
        <h1 className='font-bold text-base sm:text-3xl flex flex-wrap '>
            <span className='text-slate-500'>Cozy</span>
            <span className='text-slate-700'>Corner</span>
        </h1>
        </Link>
        <form onSubmit={handleSubmit} className='bg-slate-100 p-3 rounded-lg flex items-center '>
            <input type="text" placeholder='Search...'
            className='bg-transparent focus:outline-none w-24 sm:w-64'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} />
            <button>
            <FaSearch className='text-slate-600' />
            </button>
        </form>
        <ul className='flex gap-3'>

          <Link to='/subscription'>
            {currentUser && currentUser.role !== 'admin' &&(
          <button className=' text-green-600 font-semibold uppercase hover:underline'>Become seller</button>
          )}
          </Link>

          <Link to='/'>
          <li className='hidden sm:inline text-slate-700 hover:underline uppercase font-semibold'>Home</li>
          </Link>
          <Link to='/about'>
          <li className='hidden sm:inline text-slate-700 hover:underline uppercase font-semibold'>About</li>
          </Link>
          
          <Link to='/admin-page'>
  {currentUser && currentUser.role === 'admin' && (
    <li className='inline text-slate-700 hover:underline uppercase font-semibold'>Dashboard</li>
  )}
</Link>
          
          <Link to='/profile'>
            {currentUser ?  (
              <img className='rounded-full h-7 w-7 object-cover' src={currentUser.avatar} alt='profile' referrerPolicy="no-referrer" />
            ) : (
          <li className=' text-slate-700 hover:underline uppercase font-semibold'>Sign in</li>
        )}
        </Link>
        </ul>
      </div>
    </header>
    
  )
}
