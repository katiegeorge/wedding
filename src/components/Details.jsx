/** @jsx jsx */

import { jsx, Heading } from "theme-ui";
import Section from "./Section";

const Details = ({ className }) => {
  return (
    <Section heading="Details" id="details" light className={className}>
      <Heading>Coming soon!</Heading>
    </Section>
  );
};

export default Details;
