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
	return (
		<div class="sugestoes">
			<div class="titulo">
				Sugestões para você
				<div>Ver tudo</div>
			</div>

			<Sugestao imagem="assets/img/bad.vibes.memes.svg" usuario="bad.vibes.memes" segue="sim" />
			<Sugestao imagem="assets/img/chibirdart.svg" usuario="chibirdart" segue="sim" />
			<Sugestao
				imagem="assets/img/razoesparaacreditar.svg"
				usuario="razoesparaacreditar"
				segue="nao"
			/>
			<Sugestao imagem="assets/img/adorable_animals.svg" usuario="adorable_animals" segue="sim" />
			<Sugestao imagem="assets/img/smallcutecats.svg" usuario="smallcutecats" segue="sim" />
		</div>
	);
}
