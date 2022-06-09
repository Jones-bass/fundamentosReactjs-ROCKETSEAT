
import { PencilLine } from 'phosphor-react';
import styles from './Sidebar.module.css';
export function Sidebar() {

  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover}
        src="https://i.pinimg.com/originals/9f/23/8d/9f238d8ca41870eff8b95bce96e21aff.jpg" />

      <div className={styles.profile}>
        <img className={styles.avatar}
          src="https://avatars.githubusercontent.com/u/85463497?v=4" />
        <strong>Jones Bass</strong>
        <span>Web Development</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20}/>
          Editar meu Perfil
        </a>
      </footer>
    </aside>
  )
}


