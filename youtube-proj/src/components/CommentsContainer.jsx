import React from 'react'
import CommentsList from './CommentsList'
import { commentsData } from '../constant'
const CommentsContainer = () => {
  return (
    <div className=''>
      <CommentsList data={commentsData}/>
    </div>
  )
}

export default CommentsContainer