import styled from "styled-components";

function Text() {
	return (
		<Container>
			<h1>Text</h1>
		</Container>
	);
}

export default Text;
const Container = styled("div")({
	backgroundColor: "lightgrey",
});
