import './Card.css'

export default ({imgSrc,follows,title})=>{
    return(
        <div className='card-wrapper'>
        <div className='card'>
           <div className='img-frame'> 
           <img className='card-img' src={imgSrc} alt='song'/>
           </div>
        <div className='innercard'>
            <div className='followerCount'>
                <span>{follows} Follows</span>
            </div>
        </div>
    </div>
    <p className='label'>{title}</p>
</div>
    )
}