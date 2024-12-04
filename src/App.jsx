/* eslint-disable react/jsx-key */
import { Header } from './components/header/Header';
import { Post } from './components/post/Post';
import './global.css';
import styles from './App.module.css'
import { Sidebar } from './components/sidebar/Sidebar';

// author: { avatar_url: string, name: "", role: ""}
//publishedAt: Date
// content: string

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/viktor-lima.png',
      name: 'João Lima',
      role: 'FullStack Developer'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {link: 'link', content: '👉 jane.design/doctorcare'}
    ],
    publishedAt: new Date('2024-11-30 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://ui-avatars.com/api/?name=Jane+Doe&background=random',
      name: 'Jane Doe',
      role: 'Frontend Developer'
    },
    content: [
      {type: 'paragraph', content: 'Olá, pessoal! 🌟'},
      {type: 'paragraph', content: 'Finalizei um projeto incrível na trilha Ignite. O nome é DevConnect!'},
      {link: 'link', content: '👉 jane.design/devconnect'}
    ],
    publishedAt: new Date('2024-11-30 21:00:00')
  },
  {
    id: 3,
    author: {
      avatarUrl: 'https://ui-avatars.com/api/?name=John+Doe&background=random',
      name: 'John Doe',
      role: 'Backend Engineer'
    },
    content: [
      {type: 'paragraph', content: 'E aí pessoal! 👨‍💻'},
      {type: 'paragraph', content: 'Acabei de lançar um projeto open source no GitHub. É uma API para gerenciamento de tarefas.'},
      {link: 'link', content: '👉 github.com/johndoe/taskmanager'}
    ],
    publishedAt: new Date('2024-11-30 22:00:00')
  },
  {
    id: 4,
    author: {
      avatarUrl: 'https://ui-avatars.com/api/?name=Sara+Smith&background=random',
      name: 'Sara Smith',
      role: 'UI/UX Designer'
    },
    content: [
      {type: 'paragraph', content: 'Oi pessoal! 🎨'},
      {type: 'paragraph', content: 'Adicionei um novo design no Behance. É uma interface para uma plataforma de e-learning.'},
      {link: 'link', content: '👉 behance.net/sarasmith/elearning'}
    ],
    publishedAt: new Date('2024-11-30 23:00:00')
  },
  {
    id: 5,
    author: {
      avatarUrl: 'https://ui-avatars.com/api/?name=Robert+Brown&background=random',
      name: 'Robert Brown',
      role: 'Mobile Developer'
    },
    content: [
      {type: 'paragraph', content: 'Salve galera! 📱'},
      {type: 'paragraph', content: 'Finalizei meu primeiro app Flutter. É um gerenciador de finanças.'},
      {link: 'link', content: '👉 robertbrown.dev/financeapp'}
    ],
    publishedAt: new Date('2024-12-01 00:00:00')
  }
];


export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
        {posts.map(post => {
          return (
            <Post 
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            /> 
          )
        })}
        </main>
      </div>
    </div>
  );
};


