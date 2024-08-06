import { Avatar } from '../Avatar/Avatar';
import { Comment } from '../Comment/Comment';
import styles from './Post.module.css';

export function Post(){
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src="https://i.pinimg.com/736x/c0/12/bf/c012bf3b82a285f48d1e06ddbc572939.jpg"/>
                    <div className={styles.authorInfo}>
                        <strong>Gandalf, the Grey</strong>
                        <span>Wizard and Hobbit admirer</span>
                    </div>
                </div>

                <time title="05 de agosto às 22:45">1 hour ago</time>
            </header>

            <div className={styles.content}>
                <p>Greetings 👋</p>
                <p>So do all who live to see such times. But that is not for them to decide. All we have to decide is what to do with the time that is given us. 🧙‍♂️</p>
                <p><a href="https://www.goodreads.com/quotes/tag/gandalf">👉 WizardThoughts.com</a></p>
                <p><a href="">#FlyYouFools</a> <a href="">#FoolOfATook</a> <a href="">#F*ckBalrogs👎</a></p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea placeholder='Deixe um comentário'/>

                <footer>
                    <button type='submit'>Comentar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
            </div>
        </article>
    );
}