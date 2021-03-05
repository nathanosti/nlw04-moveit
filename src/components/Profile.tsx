import styles from '../styles/components/Profile.module.css';

export default function Profile() {
  return(
    <div className={styles.profileContainer}>
      <img src="https://github.com/nathanosti.png" />
      <div>
        <strong>Nathan Osti</strong>
        <p>Level 1</p>
      </div>
    </div>
  )
}