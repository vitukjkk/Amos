import styles from './Usuario.module.css';
import { motion } from 'framer-motion';

import Img_User from '../assets/icons/icon_user.png';

export default function Usuario() {

    document.title = 'AMÓS - Usuário';

    const pageVariants = {
        initial: {
            opacity: 0,
            y: -50,
        },
        in: {
            opacity: 1,
            y: 0,
        },
        out: {
            opacity: 0,
            y: 50,
        },
    };

    const pageTransition = {
        type: 'spring',
        stiffness: 50,
        damping: 20,
    };

    return (
        <motion.div
            className={styles.divUsuario}
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
        >
            <img src={Img_User} className={styles.imgPerfil} alt="Icone usuario"/>       
            <br/>    
            <fieldset>                   
                <h2>username</h2>
                <input id={styles.inputUsuarioUsername} name="inputUsuarioUsername" type="text" readOnly={true}/>
                <button>Alterar username</button>
                <h3>Nome</h3>
                <input id={styles.inputUsuarioNome} name="inputUsuarioNome" type="text" readOnly={true}/>
                <button>Alterar nome</button>
                <h2>Senha</h2>
                <input id={styles.inputUsuarioSenha} name="inputUsuarioSenha" type="password" readOnly={true}/>
                <button>Alterar senha</button>
                <h2>Bio</h2>
                <input id={styles.inputUsuarioBio} name="inputUsuarioBio" type="text" readOnly={true}/>
                <button>Alterar bio</button>
                <h2>Objetivos</h2>
                <div className={styles.divUsuarioObjetivos}>
                    <div className={styles.divUsuarioObjetivosItem}>
                    <h3>Nome_Objetivo</h3>
                        <div className={styles.divUsuarioObjetivosItemContent}>
                            <span>Em andamento</span>
                            <span>descrição do objetivo</span>
                            <span>Prazo</span>
                            <button>Alterar</button>
                        </div>
                    </div>

                    <div className={styles.divUsuarioObjetivosItem}>
                    <h3>Nome_Objetivo</h3>
                        <div className={styles.divUsuarioObjetivosItemContent}>
                            <span>Em andamento</span>
                            <span>descrição do objetivo</span>
                            <span>Prazo</span>
                            <button>Alterar</button>
                        </div>
                    </div>

                    <div className={styles.divUsuarioObjetivosItem}>
                    <h3>Nome_Objetivo</h3>
                        <div className={styles.divUsuarioObjetivosItemContent}>
                            <span>Em andamento</span>
                            <span>descrição do objetivo</span>
                            <span>Prazo</span>
                            <button>Alterar</button>
                        </div>
                    </div>
                </div>
            </fieldset>
        </motion.div>
    )
}