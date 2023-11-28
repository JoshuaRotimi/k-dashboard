import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "../src/App";

describe("App", () => {
  it("Expect sidebar component to be mounted", async () => {
    render(<App />, {
      wrapper: BrowserRouter,
    });
    const user = userEvent.setup();

    const button = screen.queryByRole("button", { name: /hide panel/i });

    await user.click(button);

    const navButton = screen.queryByRole("button", { name: /show panel/i });

    expect(screen.queryByText("analytics")).not.toBeInTheDocument();
    expect(navButton).toBeInTheDocument();
    expect(button).not.toBeInTheDocument();
  });
});
