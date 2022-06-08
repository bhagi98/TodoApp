import { render, screen } from "@testing-library/react";
import Header from '../Header'
import '@testing-library/jest-dom'


it('Test header is displaying exact Text',
    async () => {
        render(<Header title="todo" />);
        const headingElement = screen.getByText(/todo/i);
        expect(headingElement).toBeInTheDocument();
    });


it('Test heading role is correct',
    async () => {
        render(<Header title="todo" />);
        const headingElement = screen.getByRole("heading");
        expect(headingElement).toBeInTheDocument();
    });


it('Test heading title is correct',
    async () => {
        render(<Header title="todo" />);
        const headingElement = screen.getByTitle("Header");
        expect(headingElement).toBeInTheDocument();
    });


it('Test header with Test ID',
    async () => {
        render(<Header title="todo" />);
        const headingElement = screen.getByTestId("header-1");
        expect(headingElement).toBeInTheDocument();
    });


it('Inverse of Check heading matching text',
    async () => {
        render(<Header title="todo" />);
        const headingElement = screen.queryByText(/TodoApp/i);
        expect(headingElement).not.toBeInTheDocument();
    });

it('Test the count of Headings',
    async () => {
        render(<Header title="todo" />);
        const headingElements = screen.getAllByRole("heading");
        expect(headingElements.length).toBe(1)
    });






