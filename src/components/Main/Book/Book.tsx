import { createImageUrl } from '../../../utils/utilities'
import './Book.css'

type BookProps = {
  title: string
}

export default function Book({ title }: BookProps) {
  return (
    <button className='book-button'>
      <div className='book-wrapper'>
        <img
          className='book-image'
          src={createImageUrl(title)}
          alt={`Book cover of ${title}`}
        />
        <div className='book-content'>
          <h3 className='book-title'>{title}</h3>
        </div>
      </div>
    </button>
  )
}
