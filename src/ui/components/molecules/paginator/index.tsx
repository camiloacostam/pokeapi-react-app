import './styles.css'
//hooks
import { useDispatch, useSelector } from 'react-redux'
//redux
import {
  incrementPageCounter,
  decrementPageCounter
} from '../../../../domain/page-counter-slice'
//components
import { ChevronLeftIcon } from '../../atoms/icons/chevron-left-icon'
import { ChevronRightIcon } from '../../atoms/icons/chevron-right-icon'

export default function Paginator({ totalOfPages }: { totalOfPages?: number }) {
  const dispatch = useDispatch()
  const { pageCounter } = useSelector((state: any) => state.pageCounter)
  return (
    <div className="paginator-container">
      <button
        disabled={pageCounter === 0}
        onClick={() => dispatch(decrementPageCounter())}
      >
        <ChevronLeftIcon size={1.5} />
      </button>
      <p>Page </p>
      <p className="page-counter">{pageCounter + 1}</p>
      <p>of</p>
      <p className="page-counter">{totalOfPages}</p>
      <button
        disabled={pageCounter === totalOfPages}
        onClick={() => dispatch(incrementPageCounter())}
      >
        <ChevronRightIcon size={1.5} />
      </button>
    </div>
  )
}
