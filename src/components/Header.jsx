import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

function classeDoLink({ isActive }) {
  return isActive ? `${styles.link} ${styles.ativo}` : styles.link;
}

export default function Header({ totalItens }) {
  return (
    <header className={styles.header}>
      <div className={styles.conteudo}>
        <span className={styles.logo}>Minha Loja</span>
        <nav className={styles.nav}>
          <NavLink to="/" end className={classeDoLink}>Catálogo</NavLink>
          <NavLink to="/carrinho" className={classeDoLink}>
            Carrinho
            {totalItens > 0 && <span className={styles.contador}>{totalItens}</span>}
          </NavLink>
          <NavLink to="/admin" className={classeDoLink}>Gerenciar produtos</NavLink>
        </nav>
      </div>
    </header>
  );
}
