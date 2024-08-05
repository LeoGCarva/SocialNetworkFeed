import styles from './Post.module.css';

export function Post(props){
    return(
    <div>
        <strong>{props.author}</strong>
        <p>{props.content}</p>
    </div>
    );
}