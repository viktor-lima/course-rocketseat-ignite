import { Header } from './components/header/Header';
import { Post } from './Post';
import './global.css';
import styles from './App.module.css'
import { Sidebar } from './components/sidebar/Sidebar';

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
        <Post
          author="Diego Fernandes" 
          context="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi repellendus quam dolorem itaque mollitia voluptatem obcaecati vero dignissimos blanditiis, ullam veniam inventore et natus exercitationem odit facere magnam eius magni!" 
        />
        <Post 
          author="Gabriel" 
          context="Um novo post muito legal" 
        />
        </main>
      </div>
    </div>
  );
};


