import styled from "styled-components";
import AddButton from "../../AddButton";
import { useState } from "react";

interface Props {
	title: string;
	setText: React.Dispatch<React.SetStateAction<string>>;
}

function NewTitle({ title, setText }: Props) {
	const [newText, setNewText] = useState("");

	function handleEnterKey(key: string) {
		if (key === "Enter") addTitle();
	}

	function addTitle() {
		if (title === "Título") setText(`<h2>${newText}</h2>`);
		else if (title === "Subtítulo") setText(`<h4>${newText}</h4>`);

		setNewText("");
	}

	return (
		<Container>
			<Title>
				<label htmlFor="input">
					<b>{title}</b>
				</label>
				<input
					type="text"
					name="input"
					onChange={(e) => setNewText(e.target.value)}
					onKeyDown={(e) => handleEnterKey(e.code)}
					value={newText}
				/>
			</Title>
			<AddButton onClick={() => addTitle()}>Adicionar</AddButton>
		</Container>
	);
}

export default NewTitle;

const Title = styled("div")({
	backgroundColor: "#f0f0f0",
	display: "flex",
	alignItems: "center",
	gap: "20px",

	width: "95%",
	height: "30px",
	margin: "0 auto",
	padding: "5px",

	input: {
		all: "unset",
		width: "100%",
	},
});

const Container = styled("div")({
	display: "flex",
	flexDirection: "column",
	gap: "20px",
	alignItems: "center",
});
