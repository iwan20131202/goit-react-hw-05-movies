import notFoundImage from "../../images/notFound.jpg";

import { Wrapper, Title, Text, HomeLink, Icon } from "./NotFoundPage.styled.js";

export default function NotFoundPage() {
  return (
    <Wrapper>
      <Icon src={notFoundImage} alt="Not Found" />

      <Title>404</Title>

      <Text>Sorry, the page you are looking for doesn't exist</Text>

      <HomeLink to="/">Go to Home</HomeLink>
    </Wrapper>
  );
}
