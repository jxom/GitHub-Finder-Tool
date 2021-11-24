import { Box } from 'bumbag';
import { Image } from 'bumbag';
import logo from './logo-light.png';

function Footer() {
  return (
    <div>
      <Box alignX="center">
        <p>Created with React UI Libary</p>
        <Image
          fit="contain"
          height="100px"
          width="100px"
          src={logo}
          alt="Bumgbag Ui Logo"
          backgroundColor="white"
        />
      </Box>
    </div>
  );
}

export default Footer;
