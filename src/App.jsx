import { Header } from "./Header";
import { Post } from "./Post";

import './global.css';

export function App() {

  return (
    <div>
      <Header />

      <Post
        title="Jones Bass"
        description="Texto base só para teste de propiedades" />

      <Post
        title="Bass"
        description="Mais um texte base só para teste de propiedades" />
    </div>
  )
}

