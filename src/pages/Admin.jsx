import { useState } from "react";
import ProductForm from "../components/ProductForm";
import { formatarPreco } from "../utils/formatar";
import styles from "./Pagina.module.css";

export default function Admin({ produtos, onSalvar, onRemover }) {
  const [emEdicao, setEmEdicao] = useState(null); // produto sendo editado (ou null)

  function salvar(dados) {
    onSalvar(dados);
    setEmEdicao(null);
  }

  return (
    <section>
      <h1 className={styles.titulo}>Gerenciar produtos</h1>

      <div className={styles.admin}>
        {/* "key" faz o formulário recomeçar do zero ao trocar de produto */}
        <ProductForm
          key={emEdicao ? emEdicao.id : "novo"}
          produtoEmEdicao={emEdicao}
          onSalvar={salvar}
          onCancelar={() => setEmEdicao(null)}
        />

        <ul className={styles.lista}>
          {produtos.map((produto) => (
            <li key={produto.id} className={styles.linha}>
              <span>
                <strong>{produto.nome}</strong> — {formatarPreco(produto.preco)}
              </span>
              <span className={styles.acoes}>
                <button onClick={() => setEmEdicao(produto)}>Editar</button>
                <button className={styles.perigo} onClick={() => onRemover(produto.id)}>
                  Remover
                </button>
              </span>
            </li>
          ))}
          {produtos.length === 0 && <li>Nenhum produto ainda.</li>}
        </ul>
      </div>
    </section>
  );
}
