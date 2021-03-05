import styles from '../styles/components/ChallengeBox.module.css';

export default function ChallengeBox() {
  const hasActiveChallenge = true

  return (
    <div className={styles.ChallengeBoxContainer}>
      { hasActiveChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe 400 xp</header>
          <main>
            <img src="icons/Ilustra.svg" alt="Bodybuild" />
            <strong>Novo desafio</strong>
            <p>
            É agora Nathan, bora lá meu parça.
            Caminhe por 3 minutos e estique suas pernas
            pra você ficar saudável.
            </p>
          </main>
          <footer>
            <button
             type='button'
             className={styles.challengeFailedButton}
            >
               Falhei
            </button>

            <button
             type='button'
             className={styles.challengeSucceededButton}
            >
               Completei
            </button>
          </footer>
        </div>
      ) 
      :(
        <div className={styles.challengeNotActive}>
          <strong>Finalize um ciclo para receber um desafio</strong>
          <p>
            <img src="icons/Icon.svg" alt='Level Up' />
            Avançe de level completando desafios.
          </p>
        </div>
      )}
    </div>
  )
}