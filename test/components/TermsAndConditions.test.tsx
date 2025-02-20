import { it, expect, describe } from 'vitest'
import { render, screen } from '@testing-library/react'
import TermsAndConditions from '../../src/components/TermsAndConditions'
import userEvent from '@testing-library/user-event'

describe('TermsAndCondition',()=>{

    const renderComponent = ()=>{
        render(<TermsAndConditions/>);
        return{
            heading:screen.getByRole('heading'),
            checkbox:screen.getByRole('checkbox'),
            button:screen.getByRole('button')
        }
    }


    it('should render with correct text and initial state',()=>{
        // render(<TermsAndConditions/>);
        const {heading, checkbox, button} = renderComponent();

        // const heading = screen.getByRole('heading');
        // expect(heading).toBeInTheDocument();
        expect(heading).toHaveTextContent('Terms & Conditions');

        // const checkbox = screen.getByRole('checkbox');
        // expect(checkbox).toBeInTheDocument();
        expect(checkbox).not.toBeChecked();

        // const button = screen.getByRole('button');
        // expect(button).toBeInTheDocument();
        expect(button).toBeDisabled();
    });

    it('should enable the button when the checkbox is checked',async()=>{
        //Arange
 const {heading, checkbox, button} = renderComponent();

        //Act
        const user = userEvent.setup();
        await user.click(checkbox);

        expect(button).toBeEnabled();

    })

})