import styled from "@emotion/styled";

const Div = styled("div")`
  border-radius: 20px;
  background-size: cover;
  height: 85vh;
  @media (max-width: 1200px) {
    background-image: url("https://images.pexels.com/photos/3521937/pexels-photo-3521937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
    background-position: center;
  }
  @media (min-width: 1200px) {
    background-position: center;
    background-repeat: no-repeat;
    background-image: url("https://images.pexels.com/photos/4665064/pexels-photo-4665064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
    box-shadow: 0px 5px 220px rgba(15, 15, 15, 0.3);
  }
`;
function About() {
  return <Div id="About">About</Div>;
}

export default About;
