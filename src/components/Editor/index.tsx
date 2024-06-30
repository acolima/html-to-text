import styled from "styled-components";
import NewParagraph from "./Paragraph/NewParagraph";
import { useState } from "react";
import NewTitle from "./Title/NewTitle";

function Editor() {
	const [showInput, setShowInput] = useState("title");

	return (
		<Container>
			<Options>
				<Button onClick={() => setShowInput("title")}>Título</Button>
				<Button onClick={() => setShowInput("subtitle")}>Subtítulo</Button>
				<Button onClick={() => setShowInput("paragraph")}>Parágrafo</Button>
			</Options>

			<Content>
				{showInput === "paragraph" && <NewParagraph />}

				{showInput === "title" && <NewTitle title="Título" />}

				{showInput === "subtitle" && <NewTitle title="Subtítulo" />}
			</Content>

			<AddButton>Adicionar</AddButton>
		</Container>
	);
}

export default Editor;
const Container = styled("div")({
	backgroundColor: "#fff",

	margin: "15px",
	borderRadius: "10px",

	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	gap: "50px",
});

const Options = styled("div")({
	width: "100%",
	display: "flex",
	justifyContent: "space-around",
});

const Button = styled("button")({
	backgroundColor: "#95a573",
	color: "#fff",
	fontWeight: "bold",
	padding: "10px",
	borderRadius: "5px",
});

const AddButton = styled("button")({
	backgroundColor: "#95a573",
	padding: "10px",
	width: "50%",
	alignSelf: "center",
	textAlign: "center",
	color: "#fff",
	fontWeight: "bold",
	borderRadius: "5px",
});

const Content = styled("div")({
	width: "95%",
	height: "300px",
	margin: "0 auto",
});
