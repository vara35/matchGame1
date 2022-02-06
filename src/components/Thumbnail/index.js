import './index.css'

const Thumbnail = props => {
  const {item} = props
  return (
    <li className="list">
      <img
        src={item.thumbnailUrl}
        alt="thumbnail"
        className="thumbnail-image"
      />
    </li>
  )
}

export default Thumbnail
