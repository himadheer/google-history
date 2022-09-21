import './index.css'

const HistoryItem = props => {
  const {history, onDeleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = history

  const deleteHistoryItem = () => {
    onDeleteHistory(id)
  }

  return (
    <li className="history-item">
      <p className="time">{timeAccessed}</p>
      <img src={logoUrl} className="image" alt="domain logo" />
      <p className="title">{title}</p>
      <p className="url">{domainUrl}</p>
      <button
        id="delete"
        type="button"
        className="button"
        onClick={deleteHistoryItem}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}

export default HistoryItem
