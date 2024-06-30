import styled from "styled-components";
import { IText } from "../../utils/models";

interface Props {
	content: IText[];
}

function Text({ content }: Props) {
	function displayText() {
		let text = "";

		content.map((c) => {
			text += c.text;
		});

		return text;
	}

	return (
		<Container>
			<h2 className="header">Texto</h2>
			<Content dangerouslySetInnerHTML={{ __html: displayText() }} />
		</Container>
	);
}

export default Text;

const Container = styled("div")({
	backgroundColor: "#fff",

	margin: "15px",
	borderRadius: "10px",

	display: "flex",
	flexDirection: "column",

	gap: "20px",

	height: "90%",

	".header": {
		textAlign: "center",
	},
});

const Content = styled("div")({
	backgroundColor: "#f0f0f0",
	width: "90%",
	height: "700px",
	margin: "0 auto",
	padding: "15px",
	overflow: "scroll",
});
