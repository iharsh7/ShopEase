import './Navbar.css'
import icon from '../../../public/bag.png'
import Image from 'next/image';
const Navbar = () => {
    // console.log(icon);
  return (
    <div className='nav'>
        <div className="left">
        <Image
        src={icon}
        height={35}

        />
        <span className='s1'> Shop </span> <span className='s2'> Wisely </span>
        </div>
        </div>
  )
}

export default Navbar