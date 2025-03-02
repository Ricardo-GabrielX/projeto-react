import styles from './Post.module.css'

export function Post(){
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img 
                        src="https://avatars.githubusercontent.com/u/129549638?v=4" alt="" 
                        className={styles.avatar}
                    />
                    <div className={styles.authorInfo}>
                        <strong>Ricardo Gabriel</strong>
                        <span>Web devoleper</span>
                    </div>
                </div>
                <time 
                    title="1 de março de 2025"
                    datetime="2025-03-01 10:15:05">Publicado há 1 hora</time>
            </header>

            <div className={styles.content}>
            <p>Fala galeraa 👋</p>
            <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>|
            <p>👉{' '} <a href="">jane.design/doctorcare</a></p>
            <p>
                <a href="">#novoprojeto</a>{' '}
                <a href="">#nlw</a>{' '}
                <a href="">#rocketseat</a>
            </p>
            </div>
        </article>
    )
}
