import { useState } from "react";
import styles from "./ProductForm.module.css";

// Se vier "produtoEmEdicao", o formulário começa preenchido (modo editar).
// Se não vier, começa vazio (modo criar).
export default function ProductForm({ produtoEmEdicao, onSalvar, onCancelar }) {
  const [nome, setNome] = useState(produtoEmEdicao?.nome ?? "");
  const [preco, setPreco] = useState(produtoEmEdicao ? String(produtoEmEdicao.preco) : "");
  const [descricao, setDescricao] = useState(produtoEmEdicao?.descricao ?? "");
  const [erro, setErro] = useState("");

  function aoEnviar(evento) {
    evento.preventDefault();

    const precoNumero = Number(preco.replace(",", "."));
    if (nome.trim() === "") return setErro("Digite o nome do produto.");
    if (!precoNumero || precoNumero <= 0) return setErro("Digite um preço maior que zero.");

    onSalvar({
      id: produtoEmEdicao?.id, // undefined quando é um produto novo
      nome: nome.trim(),
      preco: precoNumero,
      descricao: descricao.trim(),
    });

    // limpa o formulário depois de salvar
    setNome("");
    setPreco("");
    setDescricao("");
    setErro("");
  }

  return (
    <form className={styles.form} onSubmit={aoEnviar}>
      <h2 className={styles.titulo}>{produtoEmEdicao ? "Editar produto" : "Novo produto"}</h2>

      <label className={styles.campo}>
        Nome
        <input value={nome} onChange={(e) => setNome(e.target.value)} />
      </label>

      <label className={styles.campo}>
        Preço (R$)
        <input value={preco} onChange={(e) => setPreco(e.target.value)} placeholder="Ex.: 29,90" />
      </label>

      <label className={styles.campo}>
        Descrição
        <textarea rows="3" value={descricao} onChange={(e) => setDescricao(e.target.value)} />
      </label>

      {erro && <p className={styles.erro}>{erro}</p>}

      <div className={styles.botoes}>
        <button type="submit" className={styles.salvar}>
          {produtoEmEdicao ? "Salvar alterações" : "Adicionar produto"}
        </button>
        {produtoEmEdicao && (
          <button type="button" className={styles.cancelar} onClick={onCancelar}>
            Cancelar
          </button>
        )}
      </div>
    </form>
  );
}
