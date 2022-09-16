function Post(prop) {
	function curtir() {
		alert('curtiu');
	}

	function salvar() {
		alert('salvou');
	}

	return (
		<div class="post">
			<div class="topo">
				<div class="usuario">
					<img src={prop.imagemTopo} alt={prop.usuarioPost} />
					{prop.usuarioPost}
				</div>
				<div class="acoes">
					<ion-icon name="ellipsis-horizontal"></ion-icon>
				</div>
			</div>

			<div class="conteudo">
				<img src={prop.imagem} alt={prop.imagem} onClick={curtir} />
			</div>

			<div class="fundo">
				<div class="acoes">
					<div>
						<ion-icon name="heart-outline" onClick={curtir}></ion-icon>
						<ion-icon name="chatbubble-outline"></ion-icon>
						<ion-icon name="paper-plane-outline"></ion-icon>
					</div>
					<div>
						<ion-icon name="bookmark-outline" onClick={salvar}></ion-icon>
					</div>
				</div>

				<div class="curtidas">
					<img src={prop.imagemFundo} alt={prop.usuarioCurtida} />
					<div class="texto">
						Curtido por <strong>{prop.usuarioCurtida}</strong> e outras{' '}
						<strong>{prop.numCurtidas.toLocaleString()} pessoas</strong>
					</div>
				</div>
			</div>
		</div>
	);
}

export default function Posts() {
	const posts = [
		{
			imagemTopo: 'assets/img/meowed.svg',
			usuarioPost: 'meowed',
			imagem: 'assets/img/gato-telefone.svg',
			imagemFundo: 'assets/img/respondeai.svg',
			usuarioCurtida: 'respondeai',
			numCurtidas: 101523,
		},
		{
			imagemTopo: 'assets/img/barked.svg',
			usuarioPost: 'barked',
			imagem: 'assets/img/dog.svg',
			imagemFundo: 'assets/img/adorable_animals.svg',
			usuarioCurtida: 'adorable_animals',
			numCurtidas: 99159,
		},
	];

	return (
		<div class="posts">
			{posts.map((p) => (
				<Post
					imagemTopo={p.imagemTopo}
					usuarioPost={p.usuarioPost}
					imagem={p.imagem}
					imagemFundo={p.imagemFundo}
					usuarioCurtida={p.usuarioCurtida}
					numCurtidas={p.numCurtidas}
				/>
			))}
		</div>
	);
}
