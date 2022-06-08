import {render} from '@testing-library/react';
import Form from '../Form'


describe("Form component Input and Add Button", () => {

    it ("rendered form" , () => {
        const { getByTestId } = render(<Form showDiv = {false} />);
        const input = getByTestId("formComponent");
        expect(input).toBeTruthy();
    });
    it ("rendered button" , () => {
        const { getByTestId } = render(<Form showDiv = {false} />);
        const addButton = getByTestId("formAddButton");
        expect(addButton).toBeTruthy();
    });
});








