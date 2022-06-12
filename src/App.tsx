import { Header } from "./components/Header/Header";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Post } from "./components/Post/Post";

import styles from './App.module.css';
import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/85463497?v=4',
      name: 'Jones Bass',
      role: 'Estudant Web'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera!' },
      { type: 'paragraph', content: 'Acabei de subir mais um degrau em meus estudos!' },
      { type: 'paragraph', content: 'Jones bass development' }
    ],
    publishedAt: new Date('2022-06-09 20:26:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/85463497?v=4',
      name: 'Saulo Lorenzo',
      role: 'Estudant'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera!' },
      { type: 'paragraph', content: 'Acabei de subir mais um degrau em meus estudos!' },
      { type: 'paragraph', content: 'Jones bass development' }
    ],
    publishedAt: new Date('2022-06-09 20:26:00')
  },
]

export function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
         {posts.map(post => {
           return (
           <Post 
           key={post.id}
           author={post.author}
           content={post.content}
           publishedAt={post.publishedAt}
           
           />)       
          })}
        </main>
      </div>
    </div>
  )
}

