import ProductCard from "../components/ProductCard";
import styles from "./Pagina.module.css";

export default function Catalogo({ produtos, onAdicionar }) {
  return (
    <section>
      <h1 className={styles.titulo}>Catálogo</h1>

      {produtos.length === 0 ? (
        <p>Nenhum produto cadastrado. Vá em "Gerenciar produtos" para criar o primeiro.</p>
      ) : (
        <div className={styles.grade}>
          {produtos.map((produto) => (
            <ProductCard key={produto.id} produto={produto} onAdicionar={onAdicionar} />
          ))}
        </div>
      )}
    </section>
  );
}
