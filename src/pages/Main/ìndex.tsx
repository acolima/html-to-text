import styled from "styled-components";
import { Editor, HTMLCode, Text } from "../../components";
import { useEffect, useState } from "react";
import { IText } from "../../utils/models";

function Main() {
	const [text, setText] = useState("");

	const [content, setContent] = useState<IText[]>([]);

	useEffect(() => {
		addText();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [text]);

	function removeTagById(id: number) {
		const filteredArray = content.filter((c) => c.id !== id);

		setContent(filteredArray);
	}

	function addText() {
		if (text) {
			const length = content.length;

			const newText: IText = {
				id: length,
				text: text,
			};

			setContent([...content, newText]);
		}
	}

	return (
		<Container>
			<Editor setText={setText} />
			<HTMLCode content={content} removeTagById={removeTagById} />
			<Text content={content} />
		</Container>
	);
}

export default Main;

const Container = styled("div")({
	height: "100vh",

	display: "grid",
	gridTemplateColumns: "repeat(3, 1fr)",
	columnGap: "20px",
	alignItems: "center",
});
