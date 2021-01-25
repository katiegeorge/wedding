/** @jsx jsx */

import { jsx, Flex, Image } from "theme-ui";
import Layout from "../components/Layout";
import Logo from "../images/katieandmeglogo.png";

const IndexPage = () => {
  return (
    <Layout>
      <Flex
        sx={{
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          height: "100vh",
        }}
      >
        <title>Home Page</title>
        <Image src={Logo} alt="wedding logo" sx={{ width: "25vw" }}></Image>
        <p>Coming soon</p>
      </Flex>
    </Layout>
  );
};

export default IndexPage;
