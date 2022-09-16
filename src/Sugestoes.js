function Sugestao(prop) {
	return (
		<div class="sugestao">
			<div class="usuario">
				<img src={prop.imagem} alt={prop.usuario} />
				<div class="texto">
					<div class="nome">{prop.usuario}</div>
					<div class="razao">{prop.segue === 'sim' ? 'Segue Você' : 'Novo no Instagram'}</div>
				</div>
			</div>

			<div class="seguir">Seguir</div>
		</div>
	);
}

export default function Sugestoes() {
	const sugestaoSeguir = [
		{ imagem: 'assets/img/bad.vibes.memes.svg', usuario: 'bad.vibes.memes', segue: 'sim' },
		{ imagem: 'assets/img/chibirdart.svg', usuario: 'chibirdart', segue: 'sim' },
		{ imagem: 'assets/img/razoesparaacreditar.svg', usuario: 'razoesparaacreditar', segue: 'nao' },
		{ imagem: 'assets/img/adorable_animals.svg', usuario: 'adorable_animals', segue: 'sim' },
		{ imagem: 'assets/img/smallcutecats.svg', usuario: 'smallcutecats', segue: 'sim' },
	];

	return (
		<div class="sugestoes">
			<div class="titulo">
				Sugestões para você
				<div>Ver tudo</div>
			</div>

			{sugestaoSeguir.map((s) => (
				<Sugestao imagem={s.imagem} usuario={s.usuario} segue={s.segue} />
			))}
		</div>
	);
}
