import styled from "styled-components";
import { IText } from "../../utils/models";

import { FaTimes } from "react-icons/fa";

interface Props {
	content: IText[];
	removeTagById: (id: number) => void;
}
function HTMLCode({ content, removeTagById }: Props) {
	return (
		<Container>
			<h2>Código HTML</h2>

			<Content>
				{content.map((c) => (
					<Text key={c.id}>
						<p>{c.text}</p>
						<DeleteButton onClick={() => removeTagById(c.id)}>
							<FaTimes title="Apagar" />
						</DeleteButton>
					</Text>
				))}
			</Content>
		</Container>
	);
}

export default HTMLCode;

const Container = styled("div")({
	backgroundColor: "#fff",

	margin: "15px",
	borderRadius: "10px",

	display: "flex",
	flexDirection: "column",

	gap: "20px",

	h2: {
		textAlign: "center",
	},

	height: "90%",
});

const Content = styled("div")({
	backgroundColor: "#f0f0f0",
	width: "90%",
	height: "700px",
	margin: "0 auto",
	padding: "15px",
	overflow: "scroll",
});

const Text = styled("div")({
	//backgroundColor: "lightcoral",
	display: "flex",
	justifyContent: "space-between",
	alignItems: "flex-start",
});

const DeleteButton = styled("button")({});
