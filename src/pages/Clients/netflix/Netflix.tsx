import { useNavigate } from "react-router-dom";
import Button from "components/Button/Button";
import {
  CompanyPage,
  CompanyCard,
  CompanyTitle,
  CompanyText,
  Actions,
} from "../companyStyles";

export default function Netflix() {
  const navigate = useNavigate();

  return (
    <CompanyPage>
      <CompanyCard>
        <CompanyTitle>Netflix</CompanyTitle>
        <CompanyText>
          Founded: 1997 | Employees: ~14 000 | Streaming entertainment service delivering series, films and games to
          members worldwide.
        </CompanyText>
        <Actions>
          <Button name="Go back" onClick={() => navigate(-1)} />
        </Actions>
      </CompanyCard>
    </CompanyPage>
  );
}
