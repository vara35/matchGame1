import './index.css'

const TabItem = props => {
  const {changeInitialId, tab, isActive} = props

  const initiateChangeId = () => {
    changeInitialId(tab.tabId)
  }
  const isActiveStatus = isActive ? 'addColor' : null

  return (
    <button
      className={`${isActiveStatus} tabButton`}
      type="button"
      onClick={initiateChangeId}
    >
      {tab.displayText}
    </button>
  )
}

export default TabItem
