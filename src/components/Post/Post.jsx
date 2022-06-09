import { Avatar } from "../Avatar/Avatar";
import { Comment } from "../Comment/Comment";
import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
        <Avatar src="https://avatars.githubusercontent.com/u/85463497?v=4" />
          <div className={styles.authorInfo}>
            <strong>Jones Bass</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time
          title="11 de junho de 2022 às 21:48h"
          dataTime="2022-06-08 21:49:30"
        >
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galera!</p>
        <p>
          <a href="#">Acabei de subir mais um degrau em meus estudos!</a>
        </p>
        <p>
          <a href="#">Jones bass development</a>
        </p>
      </div>

      <form className={styles.contentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe seu comentário" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
      <div className={styles.contentList}>
        <Comment/>
      </div>
    </article>
  );
}
