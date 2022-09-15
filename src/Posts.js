function Topo(prop) {
	return (
		<div class="topo">
			<div class="usuario">
				<img src={prop.imagemTopo} alt={prop.usuarioPost} />
				{prop.usuarioPost}
			</div>
			<div class="acoes">
				<ion-icon name="ellipsis-horizontal"></ion-icon>
			</div>
		</div>
	);
}

function Fundo(prop) {
	return (
		<div class="fundo">
			<div class="acoes">
				<div>
					<ion-icon name="heart-outline"></ion-icon>
					<ion-icon name="chatbubble-outline"></ion-icon>
					<ion-icon name="paper-plane-outline"></ion-icon>
				</div>
				<div>
					<ion-icon name="bookmark-outline"></ion-icon>
				</div>
			</div>

			<div class="curtidas">
				<img src={prop.imagemFundo} alt={prop.usuarioCurtida} />
				<div class="texto">
					Curtido por <strong>{prop.usuarioCurtida}</strong> e outras{' '}
					<strong>{prop.numCurtidas} pessoas</strong>
				</div>
			</div>
		</div>
	);
}

function Post(prop) {
	return (
		<div class="post">
			<Topo imagemTopo={prop.imagemTopo} usuarioPost={prop.usuarioPost} />
			<div class="conteudo">
				<img src={prop.imagem} alt={prop.imagem} />
			</div>
			<Fundo
				imagemFundo={prop.imagemFundo}
				usuarioCurtida={prop.usuarioCurtida}
				numCurtidas={prop.numCurtidas}
			/>
		</div>
	);
}

export default function Posts() {
	return (
		<div class="posts">
			<Post
				imagemTopo="assets/img/meowed.svg"
				usuarioPost="meowed"
				imagem="assets/img/gato-telefone.svg"
				imagemFundo="assets/img/respondeai.svg"
				usuarioCurtida="respondeai"
				numCurtidas="101.523"
			/>

			<Post
				imagemTopo="assets/img/barked.svg"
				usuarioPost="barked"
				imagem="assets/img/dog.svg"
				imagemFundo="assets/img/adorable_animals.svg"
				usuarioCurtida="adorable_animals"
				numCurtidas="99.159"
			/>
		</div>
	);
}
