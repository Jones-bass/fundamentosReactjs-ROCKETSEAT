import { useState } from "react";

import { formatDistanceToNow } from "date-fns/esm";
import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

import { Avatar } from "../Avatar/Avatar";
import { Comment } from "../Comment/Comment";

import styles from "./Post.module.css";

export function Post({ author, publishedAt, content }) {
  const [comments, setComments] = useState(["Post TOP"]);
  const [newCommentsText, setNewCommentsText] = useState('');


  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR,
    }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  function handleCreateNewComments(event) {
    event.preventDefault();
    setComments([...comments, newCommentsText]);
    setNewCommentsText('')
  }


  function handleNewCommentsChange(event) {
    setNewCommentsText(event.target.value)
  }

  function deleteComments(commentToDelete){
    const commentWithonnDeletedOne = comments.filter(comment => {
      return comment ===! commentToDelete;
    })
    setComments(commentWithonnDeletedOne)
  }

  const isNewCommentEmpty = newCommentsText.length ===0;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.autor}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((line) => {
          if (line.type === "paragraph") {
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type === "link") {
            return (
              <p>
                <a href="/">{line.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComments} className={styles.contentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea 
        name="comment" 
        placeholder="Deixe seu comentário" 
        value={newCommentsText}
        onChange={handleNewCommentsChange}
        />
        <footer>
          <button 
          type="submit"
          disabled={isNewCommentEmpty}
          >Publicar</button>
        </footer>
      </form>
      <div className={styles.contentList}>
        {comments.map((comment) => {
          return <Comment 
          key={comment}
          content={comment} 
          onDeleteComments={deleteComments}
          />;
        })}
      </div>
    </article>
  );
}
