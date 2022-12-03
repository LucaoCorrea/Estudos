import styles from './Frase.module.css'

function Frase(){
    return(
        <div className={styles.frasesContainer}>
            <p className={styles.frasesContent}>Este é um compoente com uma frase</p>
        </div>
    )
}

export  default Frase;