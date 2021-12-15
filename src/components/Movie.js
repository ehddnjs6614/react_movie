import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function Movie({ id, coverImg, title, year, summary, genres }) {
  return (
    <div>
      <img src={coverImg} alt={title} />
      <h4>
        <Link to={`/movie/${id}`}>제목 : {title}</Link>
      </h4>
      <p>출시일 : {year}</p>
      <p>
        {summary.length > 235 ? `${summary.slice(0, 235)}` : summary}...
      </p>{' '}
      {/* 글길때 뒤에 ...로 잘라주는법*/}
      <ul>
        {genres.map(g => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  )
}

Movie.propTypes = {
  idL: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}
export default Movie
