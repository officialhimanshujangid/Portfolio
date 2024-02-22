import styled from "@emotion/styled";
import Links from "../Components/Header/Links";

const FooterContainer = styled("footer")`
  background-color: #0a192f;
  color: white;
  padding: 2rem;
  text-align: center;
  margin-bottom: 30px;
`;

const FooterContent = styled("div")`
  font-family: "Nunito Sans", sans-serif;
  max-width: 500px;
  margin: 0 auto;
`;

const FooterHeading = styled("h3")`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const FooterParagraph = styled("p")`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1rem;
  margin-bottom: 1rem;
`;

const FooterSpan = styled("a")`
  text-decoration: none;
  letter-spacing: 1px;
  color: #5cebcb;
`;

function Footer() {
  return (
    <FooterContainer id="contact">
      <FooterContent>
        <FooterHeading>Contact Me</FooterHeading>
        <FooterParagraph>
          Feel free to get in touch with me for collaboration, inquiries, or
          just to say hi!
        </FooterParagraph>
        <FooterParagraph>
          Email:{" "}
          <FooterSpan href="mailto:officialhimanshujangid@gmail.com">
            officialhimanshujangid@gmail.com
          </FooterSpan>
        </FooterParagraph>
        <FooterParagraph>
          <Links />
        </FooterParagraph>
      </FooterContent>
    </FooterContainer>
  );
}

export default Footer;
