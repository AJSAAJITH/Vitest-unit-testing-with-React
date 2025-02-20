// import { it, expect, describe } from 'vitest';
import { render, screen } from '@testing-library/react'
import Greet from '../../src/components/Greet';



describe('Greet',()=>{
   

    it('should render Hello with the name when name is provided',()=>{
        render(<Greet name='Saajith'/>);
        const heading = screen.getByRole('heading');
        expect(heading).toBeInTheDocument;
        expect(heading).toHaveTextContent(/Saajith/i);
    });

    it('should return login button when name is not provided', () => {
        render(<Greet/>);
        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
        expect(button).toHaveTextContent(/login/i);
    });
})