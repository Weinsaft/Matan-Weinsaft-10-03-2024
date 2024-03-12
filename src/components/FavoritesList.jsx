import React from 'react'

const FavoritesList = ({favorites}) => {
  return (
    <div className="container">
      <div className="row gap-5 mt-3 flex-wrap">
        {favorites.map((favorite, index) =>{
            return <div key={index} className='col d-flex justify-content-center'>
                <img src={favorite.Poster} alt={`${favorite.Title} Poster`} width={200}/>
            </div>
        })}
    </div>
    </div>
  )
}

export default FavoritesList