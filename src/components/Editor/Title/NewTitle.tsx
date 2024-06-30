import styled from "styled-components";

interface Props {
	title: string;
}

function NewTitle({ title }: Props) {
	return (
		<Title>
			<label htmlFor="input">
				<b>{title}</b>
			</label>
			<input type="text" name="input" />
		</Title>
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
