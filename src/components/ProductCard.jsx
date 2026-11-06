import { formatarPreco } from "../utils/formatar";
import styles from "./ProductCard.module.css";

export default function ProductCard({ produto, onAdicionar }) {
  return (
    <article className={styles.card}>
      <h3 className={styles.nome}>{produto.nome}</h3>
      <p className={styles.descricao}>{produto.descricao}</p>
      <div className={styles.rodape}>
        <strong className={styles.preco}>{formatarPreco(produto.preco)}</strong>
        <button className={styles.botao} onClick={() => onAdicionar(produto.id)}>
          Adicionar ao carrinho
        </button>
      </div>
    </article>
  );
}
