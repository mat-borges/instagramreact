export default function Usuario(prop) {
	return (
		<div class="usuario">
			<img src={prop.linkImagem} alt={prop.usuario} />
			<div class="texto">
				<strong>{prop.usuario}</strong>
				<span>
					{prop.nome}
					<ion-icon name="pencil"></ion-icon>
				</span>
			</div>
		</div>
	);
}
