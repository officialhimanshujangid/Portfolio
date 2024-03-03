import styled from "@emotion/styled";
import { MdCloudDownload } from "react-icons/md";

const Div = styled("div")`
  @media (max-width: 1200px) {
    /* position: absolute;
    top: 2vh;
    right: 5vw; */
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media (min-width: 1200px) {
    position: absolute;
    top: 0rem;
    right: 2vw;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
const Span = styled("span")`
  @media (max-width: 1200px) {
    padding-left: 2vw;
    text-align: center;
  }
  @media (min-width: 1200px) {
    display: none;
  }
`;
const Button = styled("button")`
  background-color: #5cebcb;
  @media (max-width: 1200px) {
    font-size: 15px;
    width: 90%;
    border: none;
    border-radius: 10vw;
    padding-block: 3px;
    font-family: "Source Code Pro", monospace;
    letter-spacing: 3px;
    font-weight: 600;

    margin-top: 0.6rem;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
    &:hover {
      transform: scale(1.06);
      transition: all 0.3s ease-in-out;
    }
  }
  @media (min-width: 1200px) {
    font-size: 3vw;
    width: 5vw;
    height: 5vw;
    border: none;
    border-radius: 10vw;
    padding-block: 0.5rem;
    font-family: "Source Code Pro", monospace;
    letter-spacing: 1rem;
    font-weight: 700;

    margin-top: 1rem;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
    &:hover {
      transform: scale(1.06);
      transition: all 0.1s ease-in-out;
    }
  }
`;
function PdfAdd() {
  const downloadPDF = () => {
    // Path to the PDF file within your project
    const pdfPath = "/pdfs/HimanshuJangidResume.pdf";

    // Create a download link
    const a = document.createElement("a");
    a.href = pdfPath;
    a.download = "HimanshuJangidResume.pdf";

    // Append the link to the document and trigger a click event
    document.body.appendChild(a);
    a.click();

    // Remove the link from the document
    document.body.removeChild(a);
  };

  return (
    <Div>
      <Button onClick={downloadPDF}>
        <MdCloudDownload />
        <Span>Download Resume</Span>
      </Button>
    </Div>
  );
}

export default PdfAdd;
