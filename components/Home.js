import Image from 'next/image';
import styles from '../styles/Home.module.css';

function Home() {
  return (
    <div className={styles.container}>
      <Image src="/logo.png" alt="Logo" width={200} height={200} />

      <h1>CIA LOGIN</h1>
      <div className={styles.inputContainer}>
        <span>AGENT ID</span>
        <input type="text" />
      </div>

      <div className={styles.inputContainer}>
        <span>PASSWORD</span>
        <input type="password" />
      </div>

      <button>LOGIN</button>
    </div>
  );
}

export default Home;

/*
CONSIGNES :

👉 Dans le composant Home, ajoutez la mécanique permettant de récupérer les valeurs
 des deux champs de saisie et exploitez les pour gérer la connexion. 

👉 Lors du clic sur le bouton "login" et si l’utilisateur saisit les bonnes informations, le contenu de la page
 sera modifié pour afficher uniquement le message "Welcome, agent Cody Banks.", sinon, rien ne se passe.

 Les informations de connexion (sensibles à la casse) à vérifier sont les suivantes :

Agent ID : codybanks

Mot de passe : qwerty123

*/
