import styled from "@emotion/styled";

const Div = styled("div")`
  @media (max-width: 1200px) {
  }
  @media (min-width: 1200px) {
    text-align: center;
  }
`;
const Button = styled("button")`
  background-color: #5cebcb;
  @media (max-width: 1200px) {
    font-size: 15px;
    width: 90%;
    border: none;
    border-radius: 10vw;
    padding-block: 5px;
    font-family: "Source Code Pro", monospace;
    letter-spacing: 2px;
    font-weight: 700;

    margin-top: 0.6rem;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
    &:hover {
      transform: scale(1.06);
      transition: all 0.3s ease-in-out;
    }
  }
  @media (min-width: 1200px) {
    font-size: 2rem;
    width: 90%;
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
      transition: all 0.3s ease-in-out;
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
      <Button onClick={downloadPDF}>Download Resume</Button>
    </Div>
  );
}

export default PdfAdd;