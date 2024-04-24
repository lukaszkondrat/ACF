import { useState } from "react";

import { useQuotes } from "../components/ui/useQuotes";

import HomepageNav from "../components/nav/HomepageNav";
import Container from "../components/ui/Container";
import Logo from "../components/ui/Logo";
import Quotes from "../components/ui/Quotes";
import Button from "../components/ui/Button";
import Footer from "../components/ui/Footer";

function Homepage() {
  const [quote, setQuote] = useState({
    text: "Everything you want is on the other side of fear.",
    author: "Jack Canfield",
  });

  const { quotes } = useQuotes();

  function getRandomQuote() {
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  }

  return (
    <Container>
      <HomepageNav />
      <Logo />
      <Quotes quote={quote} />
      <Button onClick={getRandomQuote} btnWidth="16rem">
        Get inspired!
      </Button>
      <Footer />
    </Container>
  );
}

export default Homepage;
