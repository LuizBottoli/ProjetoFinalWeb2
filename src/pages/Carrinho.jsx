import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { formatarPreco } from "../utils/formatar";
import styles from "./Pagina.module.css";

export default function Carrinho({ produtos, carrinho, onMudarQtd, onRemover, onLimpar }) {
  const itens = carrinho
    .map((item) => ({ produto: produtos.find((p) => p.id === item.id), qtd: item.qtd }))
    .filter((item) => item.produto); 

  const total = itens.reduce((soma, item) => soma + item.produto.preco * item.qtd, 0);

  if (itens.length === 0) {
    return (
      <section>
        <h1 className={styles.titulo}>Carrinho</h1>
        <p>
          Seu carrinho está vazio. <Link to="/">Ver o catálogo</Link>
        </p>
      </section>
    );
  }

  return (
    <section>
      <h1 className={styles.titulo}>Carrinho</h1>

      <ul className={styles.lista}>
        {itens.map((item) => (
          <CartItem
            key={item.produto.id}
            produto={item.produto}
            qtd={item.qtd}
            onMais={(id) => onMudarQtd(id, 1)}
            onMenos={(id) => onMudarQtd(id, -1)}
            onRemover={onRemover}
          />
        ))}
      </ul>

      <div className={styles.total}>
        <button className={styles.limpar} onClick={onLimpar}>Esvaziar carrinho</button>
        <strong>Total: {formatarPreco(total)}</strong>
      </div>
    </section>
  );
}
