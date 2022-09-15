import Esquerda from './Esquerda';

export default function Corpo() {
	return (
		<div class="corpo">
			<Esquerda />

			<div class="sidebar">
				<div class="usuario">
					<img src="assets/img/catanacomics.svg" alt="logo-catanacomics" />
					<div class="texto">
						<strong>catanacomics</strong>
						<span>
							Catana
							<ion-icon name="pencil"></ion-icon>
						</span>
					</div>
				</div>

				<div class="sugestoes">
					<div class="titulo">
						Sugestões para você
						<div>Ver tudo</div>
					</div>

					<div class="sugestao">
						<div class="usuario">
							<img src="assets/img/bad.vibes.memes.svg" alt="logo-badvibesmeme" />
							<div class="texto">
								<div class="nome">bad.vibes.memes</div>
								<div class="razao">Segue você</div>
							</div>
						</div>

						<div class="seguir">Seguir</div>
					</div>

					<div class="sugestao">
						<div class="usuario">
							<img src="assets/img/chibirdart.svg" alt="logo-chibid" />
							<div class="texto">
								<div class="nome">chibirdart</div>
								<div class="razao">Segue você</div>
							</div>
						</div>

						<div class="seguir">Seguir</div>
					</div>

					<div class="sugestao">
						<div class="usuario">
							<img src="assets/img/razoesparaacreditar.svg" alt="logo-razoespracreditar" />
							<div class="texto">
								<div class="nome">razoesparaacreditar</div>
								<div class="razao">Novo no Instagram</div>
							</div>
						</div>

						<div class="seguir">Seguir</div>
					</div>

					<div class="sugestao">
						<div class="usuario">
							<img src="assets/img/adorable_animals.svg" alt="logo-adorableanimals" />
							<div class="texto">
								<div class="nome">adorable_animals</div>
								<div class="razao">Segue você</div>
							</div>
						</div>

						<div class="seguir">Seguir</div>
					</div>

					<div class="sugestao">
						<div class="usuario">
							<img src="assets/img/smallcutecats.svg" alt="logo-smallcutecats" />
							<div class="texto">
								<div class="nome">smallcutecats</div>
								<div class="razao">Segue você</div>
							</div>
						</div>

						<div class="seguir">Seguir</div>
					</div>
				</div>

				<div class="links">
					Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas
					mais relevantes • Hashtags • Idioma
				</div>

				<div class="copyright">© 2021 INSTAGRAM DO FACEBOOK</div>
			</div>
		</div>
	);
}
