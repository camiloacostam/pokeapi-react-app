import { useState } from 'react'
import './styles.css'
//Components
import IconButton from '../../atoms/icon-button'
import FilterBox from '../../molecules/filter-box'
//icons
import { HashtagIcon } from '../../atoms/icons/hashtag-icon'

interface ISortByFilterProps {}

export default function SortByFilter({}: ISortByFilterProps) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="sort-by-filter-container">
      <IconButton
        icon={<HashtagIcon size={1.3} />}
        onClick={() => setIsOpen(!isOpen)}
      />
      <div className={`filter-box ${isOpen && 'open'}`}>
        <FilterBox />
      </div>
    </div>
  )
}
