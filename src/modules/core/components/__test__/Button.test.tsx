import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { Button } from "../Button";

describe("Button", () => {
  test("Should call onClick when clicked", () => {
    const onClick = vi.fn();
    render(<Button onClick={onClick} />);
    fireEvent.click(screen.getByRole("button"));
    expect(onClick).toHaveBeenCalled();
  });
});
