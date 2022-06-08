import { render, screen, fire } from '@testing-library/react';
import Form from '../Form'
import '@testing-library/jest-dom'
import { fireEvent } from '@testing-library/react';

const mockedSetTodo = jest.fn()

describe("Form component Input and Add Button", () => {

    it("rendered form", () => {
        const { getByTestId } = render(<Form showDiv={false} />);
        const input = getByTestId("formComponent");
        expect(input).toBeTruthy();
    });
    it("rendered button", () => {
        const { getByTestId } = render(<Form showDiv={false} />);
        const addButton = getByTestId("formAddButton");
        expect(addButton).toBeTruthy();
    });
});

describe("Add todo Item", () => {
    it('Should render input element', async () => {
        render(

            <Form
                inputValue={[]}
                setInputValue={mockedSetTodo}
            />
        );
        const inputElemet = screen.getByPlaceholderText(/Enter something to do.../i)
        expect(inputElemet).toBeInTheDocument();
    });

    it('Test the ability to type in input field', async () => {
        render(
            <Form
                inputValue={[]}
                setInputValue={mockedSetTodo}
            />
        );
        const inputElemet = screen.getByPlaceholderText(/Enter something to do.../i)
        fireEvent.change(inputElemet, { target: { value: "task1" } })
        expect(inputElemet.value).toBe("task1")
    });

})










