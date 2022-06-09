import { Header } from "./components/Header/Header";
import { Sidebar } from "./components/Sidebar/Sidebar.module";
import { Post } from "./components/Post/Post";

import styles from './App.module.css';
import './global.css';

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

