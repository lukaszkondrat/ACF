import Container from "../components/ui/Container";
import AddCountryForm from "../components/travels/AddCountryForm";
import EditCountryForm from "../components/travels/EditCountryForm";

function AddEditCountryPage({ action }) {
  return (
    <Container>
      {action === "add" ? <AddCountryForm /> : <EditCountryForm />}
    </Container>
  );
}

export default AddEditCountryPage;
