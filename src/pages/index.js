// Step 1: Import React
import * as React from "react";
import Layout from "../components/layout";
import { StaticImage} from "gatsby-plugin-image";

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle={"Home Page"}>
      <h1>Welcome to my Gatsby site!</h1>
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage src="../images/deer.jpg" alt="Deer in nature"></StaticImage>
    </Layout>
  );
};

// Step 3: Export your component
export default IndexPage;
