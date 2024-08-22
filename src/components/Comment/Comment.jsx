/* eslint-disable react/prop-types */
import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from '../Avatar/Avatar';

export function Comment({ content, onDeleteComment}){
    function handleDeleteComment() {
        onDeleteComment(content);
    }

    return(
        <div className={styles.comment}>
            <Avatar
                hasBorder={false}
                src="https://64.media.tumblr.com/a6d448ac3db5265e8e01d18c4284ad8c/tumblr_nqpo9s3ixf1tgh6zro9_400.png"
            />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Bilbo Baggins</strong>
                            <time title="11 de maio às 08:13">2h ago</time>
                        </div>

                        <button onClick={handleDeleteComment} title='Delet Comment'>
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>{content}</p>
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