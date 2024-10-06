import { useNavigate } from 'react-router-dom'
import style from './style.module.css'

export default function ErrorNotFoundPage() {
  const navigate = useNavigate()

  return (
    <div className={style.pageContainer}>
      <h1>404</h1>
      <p>Page not found</p>
    </div>
  )
}
