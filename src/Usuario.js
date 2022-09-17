import React, { useState } from 'react';

export default function Usuario(prop) {
	let imagemUrl;
	const [nome, setNome] = React.useState('');
	const [linkImagem, setImagem] = useState('');

	function editarNome() {
		const nomePrompt = prompt('Qual nome de exibição você deseja?');
		setNome(nomePrompt);
	}

	function alterarImagem() {
		const promptImagem = prompt('Insira o link para a imagem');
		setImagem(promptImagem);
	}

	return (
		<div class="usuario">
			<img
				src={linkImagem === '' || linkImagem === null ? prop.linkImagem : linkImagem}
				alt={prop.usuario}
				onClick={alterarImagem}
			/>
			<div class="texto">
				<strong>{prop.usuario}</strong>
				<span>
					{/* {prop.nome} */}
					{nome === '' || nome === null ? prop.nome : nome}
					<ion-icon name="pencil" onClick={editarNome}></ion-icon>
				</span>
			</div>
		</div>
	);
}
