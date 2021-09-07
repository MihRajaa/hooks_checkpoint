import React from 'react'
import { Link } from 'react-router-dom'

const Desc = (props) => {
    let movie = props.movies.find( el => el.id == props.match.params.id )
    return (
        <div>
            <div>
                
                <p style={{color:'white'}}> {movie.desc} </p>
                
                <iframe width="819" height="570" src={movie.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div>
                <Link to="/">
                    <button className="btn" >Home Page</button>
                </Link>
            </div>
        </div>
    )
}

export default Desc
