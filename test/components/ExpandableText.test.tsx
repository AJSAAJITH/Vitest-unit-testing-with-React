import { it, expect, describe } from 'vitest'
import { render, screen } from '@testing-library/react'
import ExpandableText from '../../src/components/ExpandableText'
import userEvent from '@testing-library/user-event'

describe('ExpandableText', () => {

    const limit = 255;
    const longText = 'a'.repeat(limit + 1);
    const truncatedText = longText.substring(0, limit)+ '...';

    it('should retun the full text if less than 255 characters', () => {
        const text = "Short text";

        render(<ExpandableText text={text} />);
        expect(screen.getByText(text)).toBeInTheDocument();
    });


    it('should truncate text if longer than 255 characters', () => {
        render(<ExpandableText text={longText} />);
    
        expect(screen.getByText(truncatedText)).toBeInTheDocument();
        const button = screen.getByRole('button');
        expect(button).toHaveTextContent(/more/i);
    });

    it('should expan text when show when show more button clicked', async() => {
        render(<ExpandableText text={longText} />);

        //act
        const button = screen.getByRole('button');
        const user = userEvent.setup();
        await user.click(button);

        expect(screen.getByText(longText)).toBeInTheDocument();
        expect(button).toHaveTextContent(/less/i);
    });

    it('should collapse text when show less button is clicked', async() => {
        render(<ExpandableText text={longText} />);

        //act
        const showMoreButton = screen.getByRole('button',{name: /more/i});
        const user = userEvent.setup();
        await user.click(showMoreButton);

        const showLessButton = screen.getByRole('button',{name:/less/i});
        await user.click(showLessButton);

        expect(screen.getByText(truncatedText)).toBeInTheDocument();
        expect(showMoreButton).toHaveTextContent(/more/i);
    });
})