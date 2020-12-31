import { useState } from "react";
import "./App.css";
import { ToggleSwitch } from "./toggleSwitch";
import { ThemeProvider } from "styled-components";
import { light } from "./style/theme";
import styled from "styled-components";

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0.5rem;
  align-items: center;
`;

function App() {
  const [value, setValue] = useState(false);

  const handleChange = () => {
    setValue(!value);
  };

  return (
    <ThemeProvider theme={light}>
      <FlexColumn style={{ marginTop: "20%" }}>
        <ToggleSwitch value={value} onChange={handleChange} />
        <div style={{ marginTop: "10%" }}>
          {value ? "Upaljen sam" : "Ugašen sam"}
        </div>
      </FlexColumn>
    </ThemeProvider>
  );
}

export default App;
