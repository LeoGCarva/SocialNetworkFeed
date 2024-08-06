import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment(){
    return(
        <div className={styles.comment}>
            <img 
                src="https://64.media.tumblr.com/a6d448ac3db5265e8e01d18c4284ad8c/tumblr_nqpo9s3ixf1tgh6zro9_400.png" 
            />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Bilbo Baggins</strong>
                            <time title="11 de maio às 08:13">2h ago</time>
                        </div>

                        <button title='Delet Comment'>
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>Muito Bom</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Like <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}