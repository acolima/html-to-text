import styled from "styled-components";

function NewParagraph() {
	function execCmd(command: string, value?: string) {
		document.execCommand(command, false, value);
	}

	const addLink = () => {
		const url = prompt("Enter the URL", "http://");
		if (url) {
			execCmd("createLink", url);
		}
	};

	return (
		<Paragraph id="input-text">
			<Toolbar>
				<div>
					<ButtonToolbar onClick={() => execCmd("bold")}>
						<b>B</b>
					</ButtonToolbar>
					<ButtonToolbar onClick={() => execCmd("italic")}>
						<i>I</i>
					</ButtonToolbar>
					<ButtonToolbar onClick={() => execCmd("underline")}>
						<u>U</u>
					</ButtonToolbar>
					<ButtonToolbar onClick={() => execCmd("strikeThrough")}>
						<s>S</s>
					</ButtonToolbar>
				</div>
				<div>
					<ButtonToolbar onClick={() => execCmd("insertOrderedList")}>
						ordenada
					</ButtonToolbar>
					<ButtonToolbar onClick={() => execCmd("insertUnorderedList")}>
						nao ordenada
					</ButtonToolbar>
					<ButtonToolbar onClick={() => addLink()}>Link </ButtonToolbar>
				</div>
			</Toolbar>

			<TextEditor id="editor" contentEditable="true"></TextEditor>
		</Paragraph>
	);
}

export default NewParagraph;

const Paragraph = styled("div")({
	backgroundColor: "#f0f0f0",

	width: "100%",
	height: "300px",
	margin: "0 auto",
});

const TextEditor = styled("div")({
	height: "80%",
	padding: "15px",
	outline: "none",
});

const Toolbar = styled("div")({
	display: "flex",
	justifyContent: "space-between",
});

const ButtonToolbar = styled("button")({
	padding: "10px",
});
