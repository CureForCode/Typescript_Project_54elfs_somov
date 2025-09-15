import { useContext, type ReactNode } from "react";
import Button from "components/Button/Button";

import {
  Cards,
  CardWrapper,
  CardInfo,
  CardInfoTitle,
  CardInfoContent,
  RemoveAllWrapper,
} from "./styles";
import { LayoutContext } from "../Layout/Layout";

function Employees() {
  const { employeeData, setEmployeeData } = useContext(LayoutContext);

  const handleDelete = (id: string) => {
    setEmployeeData((prev) => prev.filter((e) => e.id !== id)); // удалить одного
  };

  const handleRemoveAll = () => {
    setEmployeeData([]); // удалить всех
  };

  const employeeList = employeeData.map((employee) => {
    return (
      <CardWrapper key={employee.id}>
        <CardInfo>
          <CardInfoTitle>Name</CardInfoTitle>
          <CardInfoContent>{employee?.name}</CardInfoContent>
        </CardInfo>
        <CardInfo>
          <CardInfoTitle>Surname</CardInfoTitle>
          <CardInfoContent>{employee?.surname}</CardInfoContent>
        </CardInfo>
        <CardInfo>
          <CardInfoTitle>Age</CardInfoTitle>
          <CardInfoContent>{employee?.age}</CardInfoContent>
        </CardInfo>
        <CardInfo>
          <CardInfoTitle>Job Position</CardInfoTitle>
          <CardInfoContent>{employee?.job}</CardInfoContent>
        </CardInfo>
        {/* Кнопка Delete внутри карточки */}
        <Button isRed name="Delete" onClick={() => handleDelete(employee.id)} />
      </CardWrapper>
    );
  });

  return (
    <div>
      <Cards>{employeeList}</Cards>
      {employeeData.length > 0 && (
        <RemoveAllWrapper>
          <Button isRed name="Remove All Employees" onClick={handleRemoveAll} />
        </RemoveAllWrapper>
      )}
    </div>
  );
}

export default Employees;
