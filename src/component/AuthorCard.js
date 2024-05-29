import React from 'react';
import { Link } from 'react-router-dom';

const AuthorCard = ({ item, id }) => {
  return (
    <div className='author-area'>

      <Link to={`/sub2/sub2-1/${id}`}>
        <figure>
        <img src={`/img/img${id + 1}.jpg`} alt={item.title} />  
        </figure>
      
        <div className="text-wrap">
          <p className="author">{item.author}</p>
          <button className="btn-view">VIEW</button>
        </div>
      </Link>
    </div>
  )
}

export default AuthorCard