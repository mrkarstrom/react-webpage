import profilePic from './assets/profiole.jpg';

function Card() {
  return (
    <div className="card">
        <img className='card-image' src={profilePic} alt="profile picture" />
        <h2 className='card-title'>Magnus</h2>
        <p className='card-text'>Fullstack Developer at EduTechSmart Global AB</p>
    </div>
  )
}

export default Card