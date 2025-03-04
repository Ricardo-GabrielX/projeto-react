import { ThumbsUp, Trash } from  "@phosphor-icons/react";
import { Avatar } from "./Avatar";

import styles from "./Comment.module.css"
import { useState } from "react";

export function Comment({ content , onDeleteComment}){
    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment(){
        onDeleteComment(content);
    };
    
    function handleLikeComment(){
        setLikeCount(likeCount + 1);
    }
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

                        <button onClick={handleDeleteComment} title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>{content}</p>

                </div>
                <footer>
                    <button onClick={handleLikeComment}> 
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}