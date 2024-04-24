import MainNav from "../components/nav/MainNav";
import Container from "../components/ui/Container";
import Info from "../components/contact/Info";
import ContactInfo from "../components/contact/ContactInfo";
import Footer from "../components/ui/Footer";

function ContactPage() {
  return (
    <Container>
      <MainNav />
      <Info>
        <ContactInfo />
      </Info>
      <Footer />
    </Container>
  );
}

export default ContactPage;
