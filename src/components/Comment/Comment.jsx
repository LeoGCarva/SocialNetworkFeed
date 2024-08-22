/* eslint-disable react/prop-types */
import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from '../Avatar/Avatar';
import { useState } from 'react';

export function Comment({ content, onDeleteComment}){
    const [likeCount, setLikeCount] = useState(0);

    function handleLikeComment() {
        setLikeCount(likeCount + 1);
    }

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
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Like <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}