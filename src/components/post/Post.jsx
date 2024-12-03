/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { format, formatDistanceToNow } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'

import { Avatar } from '../avatar/Avatar';
import { Comment } from '../comment/Comment';
import styles from './Post.module.css';
import { useState } from 'react';


export function Post({ author, publishedAt, content}){

  const [comments, setComments] = useState([
    1,
    2,
  ]);

  const publishedDateFormat = format(publishedAt, "dd 'de' LLL 'às' HH:mm'h'", {
    locale: ptBr
  })
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBr
  })

  const handleCreateNewComment = () => {
    event.preventDefault();
    setComments([...comments, comments.length +1])

  }


  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl}/>
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormat} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map(row => {
          if(row.type === 'paragraph'){
            return <p>{row.content}</p>
          }
          else if (row.link === 'link'){
            return <p><a href="#">{row.content}</a></p>
          }
        })}
      </div>


      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          placeholder="Deixe um commentario"
        />

        <footer>
          <button type="submit">Publicar</button>  
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(() => {
          return (
            <Comment />
          )
        })}
      </div>
    </article>
  );
};