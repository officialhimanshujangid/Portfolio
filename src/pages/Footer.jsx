import styled from "@emotion/styled";

const FooterContainer = styled("footer")`
  background-color: #0a192f;
  color: white;
  padding: 2rem;
  text-align: center;
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
  font-size: 1rem;
  margin-bottom: 1rem;
`;

const FooterSpan = styled("a")`
  text-decoration: none;
  letter-spacing: 1p;
  color: #5cebcb;
`;

const GoogleForm = styled("iframe")`
  width: 50vw;
  height: 50vh;
  border-radius: 20px;
  scrollbar-width: thin;
  scrollbar-color: transparent transparent;
  @media (max-width: 1200px) {
    width: 70vw;
  }
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
      </FooterContent>
      <GoogleForm
        title="Contact Form"
        src="https://docs.google.com/forms/d/e/1FAIpQLScqxvRizSMlb8ALUp2QnrbbDUlDGsfE-ko8cVxN3A9KbInm7Q/viewform?usp=sf_link" // Replace with your Google Form URL
        frameborder="0"
        marginheight="0"
        marginwidth="0"
      >
        Loading…
      </GoogleForm>
    </FooterContainer>
  );
}

export default Footer;
