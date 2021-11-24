import { TopNav, Image, Button, Container } from 'bumbag';
import logo from './Octocat.jpg';

function Navbar() {
  return (
    <Container>
      <TopNav>
        <TopNav.Section>
          <TopNav.Item fontWeight="semibold">
            <Image src={logo} height="44px" />
          </TopNav.Item>
          <TopNav.Item>Github Finder</TopNav.Item>
        </TopNav.Section>
        <TopNav.Section>
          <TopNav.Item>
            <Button variant="ghost" palette="primary">
              Home
            </Button>
          </TopNav.Item>
          <TopNav.Item>
            <Button palette="primary">About</Button>
          </TopNav.Item>
        </TopNav.Section>
      </TopNav>
    </Container>
  );
}

export default Navbar;
