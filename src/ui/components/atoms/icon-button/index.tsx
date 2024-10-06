import React from 'react'
import './styles.css'

interface IIconButtonProps {
  icon: React.ReactNode
  onClick?: () => void
}

export default function IconButton({ icon, onClick }: IIconButtonProps) {
  return (
    <button className="sort-by-button-container" onClick={onClick}>
      {icon}
    </button>
  )
}
