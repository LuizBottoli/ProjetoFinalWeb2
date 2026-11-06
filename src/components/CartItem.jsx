import { formatarPreco } from "../utils/formatar";
import styles from "./CartItem.module.css";

export default function CartItem({ produto, qtd, onMais, onMenos, onRemover }) {
  return (
    <li className={styles.item}>
      <div className={styles.info}>
        <strong>{produto.nome}</strong>
        <span>{formatarPreco(produto.preco)} cada</span>
      </div>

      <div className={styles.quantidade}>
        <button onClick={() => onMenos(produto.id)} aria-label="Diminuir quantidade">−</button>
        <span>{qtd}</span>
        <button onClick={() => onMais(produto.id)} aria-label="Aumentar quantidade">+</button>
      </div>

      <strong className={styles.subtotal}>{formatarPreco(produto.preco * qtd)}</strong>

      <button className={styles.remover} onClick={() => onRemover(produto.id)}>
        Remover
      </button>
    </li>
  );
}
