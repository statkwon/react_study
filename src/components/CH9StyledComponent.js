import React, { useState } from "react";
import { MY_BTN } from "./css/CH9Custom";
import { Collapse, Button, CardBody, Card } from "reactstrap";
import { HiChatAlt2 } from "react-icons/hi";

function CH9StyledComponent(args) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <h2>CH9StyledComponent</h2>
      <MY_BTN>Normal</MY_BTN>
      <MY_BTN $primary>Primary</MY_BTN>
      <br />
      <br />
      <Button color="primary" onClick={toggle} style={{ marginBottom: "1rem" }}>
        Toggle
      </Button>
      <Collapse isOpen={isOpen} {...args}>
        <Card>
          <CardBody>Hello World</CardBody>
        </Card>
      </Collapse>
      <br />
      <HiChatAlt2 style={{ fontSize: "24pt" }} /> New Chat
    </div>
  );
}

export default CH9StyledComponent;
