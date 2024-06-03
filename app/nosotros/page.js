import Image from "next/image";
import styles from "../styles/nosotros.module.css";

function Nosotros() {
	return (
		<main className="contenedor">
			<h1 className="heading">Nosotros</h1>

			<div className={styles.contenido}>
				<Image
					src="/img/nosotros.jpg"
					width={1000}
					height={800}
					alt="Imagen Nosotros"
				></Image>
				<div>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
						varius ex quis ipsum volutpat vulputate. Fusce molestie massa vel
						sem pharetra laoreet. Nullam eget aliquam felis. Vivamus quis metus
						egestas, commodo nibh ac, suscipit justo. Nunc convallis justo
						mauris, a congue turpis laoreet ut. Cras pulvinar pharetra dolor sed
						aliquam. 
					</p>
					<p>
						Vivamus sed tempus dui, ac elementum arcu. Integer et leo id urna
						vestibulum egestas in ac ex. Ut eget mollis libero, eu ornare magna.
						Donec rhoncus in turpis lobortis posuere. Etiam nulla urna, maximus
						ut dolor nec, finibus tempor nulla. Nulla facilisis placerat
						hendrerit. 
					</p>
				</div>
			</div>
		</main>
	);
}

export default Nosotros;
