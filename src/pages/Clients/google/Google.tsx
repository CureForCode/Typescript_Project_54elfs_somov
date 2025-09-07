import { useNavigate } from "react-router-dom";
import Button from "components/Button/Button";
import {
  CompanyPage,
  CompanyCard,
  CompanyTitle,
  CompanyText,
  Actions,
} from "../companyStyles";

export default function Google() {
  const navigate = useNavigate();

  return (
    <CompanyPage>
      <CompanyCard>
        <CompanyTitle>Google</CompanyTitle>
        <CompanyText>
          Founded: 1998 | Employees: ~54 000 | Search, ads, cloud, Android. Building helpful products powered by AI
          and largescale infrastructure.
        </CompanyText>
        <Actions>
          <Button name="Go back" onClick={() => navigate(-1)} />
        </Actions>
      </CompanyCard>
    </CompanyPage>
  );
}
