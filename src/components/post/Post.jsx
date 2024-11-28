import styles from './Post.module.css';

export function Post(){
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/viktor-lima.png"/>
          <div className={styles.authorInfo}>
            <strong>João Lima</strong>
            <span>FullStack Developer</span>
          </div>
        </div>

        <time title="11 de maio as 11:22" dateTime="2022-05-11 08:22:30">Publicado a 1h</time>
      </header>

      <div className={styles.content}>
        <p>
          <p>Fala galeraa 👋</p>

          <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

          <p>👉 <a href=""> jane.design/doctorcare </a>  </p>

          <p> 
            <a href="">#novoprojeto</a>{' '}
            <a href="">#nlw</a>{' '}
            <a href="">#rocketseat</a>
          </p>
        </p>
      </div>
    </article>
  );
};