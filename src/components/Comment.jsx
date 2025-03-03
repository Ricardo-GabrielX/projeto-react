import { ThumbsUp, Trash } from  "@phosphor-icons/react";
import { Avatar } from "./Avatar";

import styles from "./Comment.module.css"


export function Comment({ content }){
    return(
        <div className={styles.comment}>
            <Avatar hasBorder={ false } src="https://avatars.githubusercontent.com/u/129549638?v=4" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}> 
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Ricardo Gabriel</strong>
                            <time 
                                title="1 de março de 2025"
                                datetime="2025-03-01 10:15:05">cerca de 1 hora atrás
                            </time>
                        </div>

                        <button title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>{content}</p>

                </div>
                <footer>
                    <button> 
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}