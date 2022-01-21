/** @jsx jsx */

import { jsx, Box } from "theme-ui";
import Section from "./Section";
import Anchor from "./Anchor";

const Registry = ({ className }) => {
  return (
    <Section light heading="Registry" id="registry" className={className}>
      <Box>
       <p sx={{ my: 4 }}>
            We’re already over the moon that people are joining us in the San Juan Islands. But if you feel compelled to get us a wedding gift, we’ve created a registry!
        </p>
        <p sx={{ mb: 4 }}>
            Please do not bring boxed gifts to the wedding. Just bring yourself and your dancing shoes!
        </p>
        <p sx={{ mb: 4 }}>
            Click the button below to view our full registry on Joy. 
        </p>
        <Anchor isButton href="https://withjoy.com/katie-and-meg/registry" target="_blank" rel="noreferrer">View Registry</Anchor>
      </Box>
    </Section>
  );
};

export default Registry;
