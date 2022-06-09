import { Header } from "./Header/Header";

import styles from './App.module.css';
import './global.css';
import { Sidebar } from "./Sidebar/Sidebar.module";
import { Post } from "./Post/Post";

export function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <Post
            title="Jones Bass"
            description="Texto base só para teste de propiedades" />

          <Post
            title="Bass"
            description="Mais um texte base só para teste de propiedades" />
        </main>
      </div>
    </div>
  )
}

