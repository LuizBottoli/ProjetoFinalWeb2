import { Link } from "react-router-dom";
import styles from "./Pagina.module.css";

export default function NotFound() {
  return (
    <section>
      <h1 className={styles.titulo}>Página não encontrada (404)</h1>
      <p>O endereço que você digitou não existe.</p>
      <Link to="/">Voltar para o catálogo</Link>
    </section>
  );
}
