import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "../Avatar/Avatar";
import styles from "./Comment.module.css";

export function Comment({content, deleteComments}) {
  function hadleDeleteComments() {
    deleteComments(content)
  }

  return (
    <div className={styles.comment}>
     <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/85463497?v=4" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Jones Bass</strong>
              <time
                title="09 de junho de 2022 às 11:46"
                dataTime="2022-06-09 11:46:31"
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
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
