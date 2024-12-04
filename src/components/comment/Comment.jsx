/* eslint-disable react/prop-types */
import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from '../avatar/Avatar'
import { useState } from 'react'

export function Comment ({content, onDeleteComment}){

  const [likeCount, setLikeCount] = useState(0);

  const handleDeleteComent = () => {
    onDeleteComment(content);    
  }

  const handleLikeCount = () => {
    setLikeCount(likeCount+1);
  }

  return (
    <div className={styles.comment}> 
      <Avatar hasBorder={false} src="https://github.com/viktor-lima.png"/>

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>João Lima</strong>
              <time title="11 de maio as 11:22" dateTime="2022-05-11 08:22:30">Cerca de 1h atrás</time>  
            </div>

            <button onClick={handleDeleteComent} title="Deletar Comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeCount}>
            <ThumbsUp />
            Applaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}