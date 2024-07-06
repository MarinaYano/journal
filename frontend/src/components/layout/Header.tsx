import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='w-full mx-auto my-8'>
      <div className='flex justify-center gap-x-4'>
        <Link to='/'>
          <span className='text-white text-lg bg-slate-600 py-3 px-8 rounded'>Home</span>
        </Link>
        <Link to='/daily'>
          <span className='text-white text-lg bg-slate-600 py-3 px-8 rounded'>Journal</span>
        </Link>
      </div>
    </div>
  )
}

export default Header