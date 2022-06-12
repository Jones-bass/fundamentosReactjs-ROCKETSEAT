import { useState } from 'react';
import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "../Avatar/Avatar";
import styles from "./Comment.module.css";

interface CommetsProps {
  content: string;
  onDeleteComments: (comment: string)  => void
}
export function Comment({content, onDeleteComments}:CommetsProps) {
  const [likeCount, setLikeCount] = useState(0);

  function hadleDeleteComments() {
    onDeleteComments(content)
  }

  function handleLikeCount() {
    setLikeCount((state) => {
      return state + 1;
    });
  }

  return (
    <div className={styles.comment}>
     <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/85463497?v=4" alt=""/>
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Jones Bass</strong>
              <time
                title="09 de junho de 2022 às 11:46"
                dateTime="2022-06-09 11:46:31"
              >
                Cerca de 1h atrás
              </time>
            </div>

            <button onClick={hadleDeleteComments} title="Deletar comentário">
              <Trash size={20} />
            </button>
          </header>
          
          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeCount}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
