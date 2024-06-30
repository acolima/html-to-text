import styled from "styled-components";
import { Editor, HTMLCode, Text } from "../../components";

function Main() {
	return (
		<Container>
			<Editor />
			<HTMLCode />
			<Text />
		</Container>
	);
}

export default Main;

const Container = styled("div")({
	height: "100vh",

	display: "grid",
	gridTemplateColumns: "repeat(3, 1fr)",
	columnGap: "20px",
});
