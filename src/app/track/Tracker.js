import './Tracker.css'
const Tracker = (props) => {
  return (
    <div className="track">
        <p className='tracktitle'>{props.name}</p>
        <span className='trackspan'>{props.currency}{props.price}</span>
        </div>
  )
}

export default Tracker