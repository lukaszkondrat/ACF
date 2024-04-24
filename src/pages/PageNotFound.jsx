import { useNavigate } from "react-router-dom";

import ButtonBack from "../components/ui/ButtonBack";
import Container from "../components/ui/Container";

function PageNotFound() {
  const navigate = useNavigate();
  return (
    <Container>
      <div>
        <p>SORRY, THIS PAGE WASN&apos;T FOUND...</p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ButtonBack onClick={() => navigate("/")} />
        </div>
      </div>
    </Container>
  );
}

export default PageNotFound;
