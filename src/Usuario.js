export default function Usuario(prop) {
	let nome;
	let imagemUrl;

	function editarNome() {
		nome = prompt('Qual nome de exibição você deseja?');
		return nome;
	}

	function alterarImagem() {
		imagemUrl = prompt('Insira o link para a imagem');
		return nome;
	}

	return (
		<div class="usuario">
			<img src={prop.linkImagem} alt={prop.usuario} onClick={alterarImagem} />
			<div class="texto">
				<strong>{prop.usuario}</strong>
				<span>
					{prop.nome}
					<ion-icon name="pencil" onClick={editarNome}></ion-icon>
				</span>
			</div>
		</div>
	);
}
