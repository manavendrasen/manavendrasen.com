import Link from "next/link";
import React from "react";
import Select from "react-select";
import { THEME } from "../../../constants/Theme";
import Container from "../Container/Container";

interface NavbarProps {
  theme: any;
  setTheme: any;
}

const Navbar: React.FC<NavbarProps> = ({ theme, setTheme }) => {
  // const options = [, THEME.DARK, ];
  const options = [
    { value: THEME.LIGHT, label: "Light" },
    { value: THEME.DARK, label: "Dark" },
    { value: THEME.GRUVBOX, label: "Gruvbox" },
  ];

  const handleThemeChange = (selectedOption: any) => {
    console.log(selectedOption);

    setTheme(selectedOption);
  };

  // const theme = useGetTheme();

  return (
    <nav className="absolute left-0 top-0 w-full">
      <Container>
        <div className="flex justify-end items-end py-8">
          <div>
            <Select
              isSearchable={false}
              value={theme}
              onChange={handleThemeChange}
              options={options}
            />
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
