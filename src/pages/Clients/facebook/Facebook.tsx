import { useNavigate } from "react-router-dom";
import Button from "components/Button/Button";
import {
  CompanyPage,
  CompanyCard,
  CompanyTitle,
  CompanyText,
  Actions,
} from "../companyStyles";

export default function Facebook() {
  const navigate = useNavigate();

  return (
    <CompanyPage>
      <CompanyCard>
        <CompanyTitle>Facebook</CompanyTitle>
        <CompanyText>
          Founded: 2004 | Employees: ~72 000 | Social media & technology company
          focused on connecting people and building communities.
        </CompanyText>
        <Actions>
          <Button name="Go back" onClick={() => navigate(-1)} />
        </Actions>
      </CompanyCard>
    </CompanyPage>
  );
}
