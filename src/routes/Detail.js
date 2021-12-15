import React, { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
function Detail(props) {
  const { id } = useParams()
  const [loading1, setLoading1] = useState(true)

  const [detail1, setDetail1] = useState([])

  const getMovie = useCallback(async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json()
    console.log(json)
    setDetail1(json.data.movie)
    setLoading1(false)
  }, [id])

  useEffect(() => {
    getMovie()
  }, [getMovie])
  console.log(detail1)
  return (
    <div>
      {loading1 ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <img src={detail1.medium_cover_image} alt={detail1.id}></img>
          <h4>{detail1.title_long}</h4>
          <p>{detail1.year}</p>
          <p>평점 : {detail1.rating}</p>
          <p>줄거리 : {detail1.description_full}</p>
        </div>
      )}
    </div>
  )
}

export default Detail
