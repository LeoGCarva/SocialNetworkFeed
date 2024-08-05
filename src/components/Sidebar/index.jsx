import styles from './Sidebar.module.css';

export function Sidebar(){
    return(
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover}
                src="https://images.unsplash.com/photo-1517154421773-0529f29ea451?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            />

            <div className={styles.profile}>
                <strong>Leo Carvalho</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="">
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}