import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.container}>
        <div>
            <p>created by <a className={styles.link} href="http://erikaax.com" target="_blank" rel="noopener noreferrer">Erika AX</a> - devChallenges.io</p>
        </div>
    </footer>
  )
}

export default Footer