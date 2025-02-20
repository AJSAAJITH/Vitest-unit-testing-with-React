import { render, screen } from '@testing-library/react'
import UserList from '../../src/components/UserList';
import { it, expect, describe } from 'vitest'
import { User } from '../../src/entities';

describe('UserList',()=>{
    it('should no users when the array is empty',()=>{
        render(<UserList users={[]}/>);
        expect(screen.getByText(/no user/i)).toBeInTheDocument();
    });

    it('should render a list of users',()=>{
        const users:User[] = [
            {id:1, name:"AJA"},
            {id:12, name:"Mosh"},
        ];

        render(<UserList users={users}/>);
        users.forEach(user=>{
            const link = screen.getByRole('link', {name:user.name});
            expect(link).toBeInTheDocument();
            expect(link).toHaveAttribute('href', `/users/${user.id}`);
        });
    })
})