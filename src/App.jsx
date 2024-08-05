import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import './global.css';
import styles from './App.module.css';

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>

        <Sidebar />

        <main>
        <Post 
            author='Diego Fernandes'
            content='Lorem ipsum dolor sit amet consectetur adipisicing elit.'
          />
        </main>

      </div>
    </div>
  );
}
