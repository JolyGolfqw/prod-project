import { screen, fireEvent } from "@testing-library/react";
import renderWithTranslation from "shared/config/i18n/renderWithTranslation/renderWithTranslation";
import { Sidebar } from "widgets/Sidebar/ui/Sidebar/Sidebar";

describe("Sidebar", () => {
  test("Test render", () => {
    renderWithTranslation(<Sidebar/>);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test("Test collapsed", () => {
    renderWithTranslation(<Sidebar/>);
    const toggleBtn = screen.getByTestId('sidebar-toggle');
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
