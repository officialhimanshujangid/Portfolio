import styled from "@emotion/styled";
import Links from "../Components/Header/Links";

const FooterContainer = styled("footer")`
  transform: translateX(-400%);
  transition: all 0.8s ease-in-out;
  &.active {
    transform: translateX(0%);
    transition: all 0.8s ease-in-out;
    animation: sss 0.8s;
    @keyframes sss {
      0% {
        transform: translateX(-400%);
      }
      40% {
        transform: translateX(30%);
      }
      80% {
        transform: translateX(-15%);
      }
      100% {
        transform: translateX(0%);
      }
    }
  }
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

const FooterParagraph = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1rem;
  margin-bottom: 1rem;
`;

const FooterSpan = styled("a")`
  text-decoration: none;
  letter-spacing: 1px;
  color: #00ffc8;
  cursor: none;
`;

function Footer() {
  return (
    <FooterContainer className="section1 hh" id="contact">
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
