import { describe, test, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { ContactForm } from "./ContactForm";

describe("ContactForm", () => {
  test("displays error message when fields are empty and submit is clicked", () => {
    render(<ContactForm />);

    const submitButton = screen.getByRole("button", { name: "Submit" });
    fireEvent.click(submitButton);

    expect(screen.getByText("All fields are required.")).toBeInTheDocument();
  });

  test("displays submitted data when form is submitted with valid inputs", () => {
    render(<ContactForm />);

    fireEvent.change(screen.getByPlaceholderText("Your Name"), {
      target: { value: "Jane Doe" },
    });
    fireEvent.change(screen.getByPlaceholderText("Your Email"), {
      target: { value: "jane@example.com" },
    });
    fireEvent.change(screen.getByPlaceholderText("Your Message"), {
      target: { value: "Hello there!" },
    });

    fireEvent.click(screen.getByRole("button", { name: "Submit" }));

    expect(screen.getByText("Submitted Information")).toBeInTheDocument();
    expect(screen.getByText("Jane Doe")).toBeInTheDocument();
    expect(screen.getByText("jane@example.com")).toBeInTheDocument();
    expect(screen.getByText("Hello there!")).toBeInTheDocument();
  });

  test("clears input fields after successful submission", () => {
    render(<ContactForm />);

    const nameInput = screen.getByPlaceholderText("Your Name");
    const emailInput = screen.getByPlaceholderText("Your Email");
    const messageInput = screen.getByPlaceholderText("Your Message");

    fireEvent.change(nameInput, { target: { value: "Jane Doe" } });
    fireEvent.change(emailInput, { target: { value: "jane@example.com" } });
    fireEvent.change(messageInput, { target: { value: "Hello there!" } });

    fireEvent.click(screen.getByRole("button", { name: "Submit" }));

    expect(nameInput).toHaveValue("");
    expect(emailInput).toHaveValue("");
    expect(messageInput).toHaveValue("");
  });
});
