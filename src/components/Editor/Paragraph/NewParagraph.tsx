import { useRef } from "react";
import styled from "styled-components";
import AddButton from "../../AddButton";

import { FaListOl } from "react-icons/fa";
import { FaListUl } from "react-icons/fa";
import { FaLink } from "react-icons/fa";

interface Props {
	setText: React.Dispatch<React.SetStateAction<string>>;
}

function NewParagraph({ setText }: Props) {
	const editorRef = useRef<HTMLDivElement>(null);

	function execCmd(command: string, value?: string) {
		document.execCommand(command, false, value);
	}

	function addLink() {
		const url = prompt("Enter the URL", "http://");
		if (url) {
			const text = document.getSelection();
			execCmd("insertHTML", `<a target="_blank" href="${url}" >${text}</a>`);
		}
	}

	function getEditorContent() {
		if (editorRef.current) {
			setText(`<p>${editorRef.current.innerHTML}</p>`);
			console.log(editorRef.current.innerHTML);

			editorRef.current.innerHTML = "";
		}
	}

	return (
		<Container>
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
							<FaListOl title="Lista ordenada" />
						</ButtonToolbar>
						<ButtonToolbar onClick={() => execCmd("insertUnorderedList")}>
							<FaListUl title="Lista não ordenada" />
						</ButtonToolbar>
						<ButtonToolbar onClick={() => addLink()}>
							<FaLink title="Link" />{" "}
						</ButtonToolbar>
					</div>
				</Toolbar>

				<TextEditor
					id="editor"
					contentEditable="true"
					ref={editorRef}
				></TextEditor>
			</Paragraph>

			<AddButton onClick={() => getEditorContent()}>Adicionar</AddButton>
		</Container>
	);
}

export default NewParagraph;

const Paragraph = styled("div")({
	backgroundColor: "#f0f0f0",

	width: "100%",
	height: "300px",
	margin: "0 auto",
});

const Container = styled("div")({
	display: "flex",
	flexDirection: "column",
	gap: "20px",
	alignItems: "center",
});

const TextEditor = styled("div")({
	height: "80%",
	padding: "15px",
	outline: "none",
	overflow: "scroll",
});

const Toolbar = styled("div")({
	display: "flex",
	justifyContent: "space-between",
});

const ButtonToolbar = styled("button")({
	padding: "10px",
});
