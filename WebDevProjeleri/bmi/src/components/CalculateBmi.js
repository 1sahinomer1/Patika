import { useContext } from "react";
import { BMIcontext } from "../Context/BMIcontext";
import AlertModal from "./AlertModal";
import Modal from "./Modal";
import { Button } from "./Styles/Button.style";
import { CalculateContainer } from "./Styles/Container.style";
import { Form, Label, Input, FormGroup } from "./Styles/Form.style";

const CalculateBmi = () => {
  const context = useContext(BMIcontext);
  console.log(context.open);
  return (
    <CalculateContainer>
      <Form action="">
        <FormGroup>
          <Label htmlFor="Height">Height :</Label>
          <Input
            placeholder="173cm"
            onChange={(e) => context.handleHeight(e)}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="">Weight :</Label>
          <Input
            required
            placeholder="70kg"
            onChange={(e) => context.handleWeight(e)}
          />
        </FormGroup>

        <Button onClick={(event) => context.openModal(event)}>Calculate</Button>
      </Form>
      {context.open && <Modal></Modal>}
      {context.alert && <AlertModal></AlertModal>}
    </CalculateContainer>
  );
};

export default CalculateBmi;
