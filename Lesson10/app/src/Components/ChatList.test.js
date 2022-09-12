import { render, screen, fireEvent } from '@testing-library/react';
import ChatList from './ChatList';

const emptyFunc = () => {}

describe("ChatList tests", () => {
    test(
        'Header rendered',
        () => {
            render(<ChatList addChat={emptyFunc} removeChat={emptyFunc} chats={[]}/>)
            expect(screen.getByText('Chat List')).toBeInTheDocument()
        }
    )

    test(
        'Button exists',
        () => {
            render(<ChatList addChat={emptyFunc} removeChat={emptyFunc} chats={[]}/>)
            expect(screen.getByRole("button")).toBeInTheDocument()
        }
    )

    test(
        'Button click',
        () => {
            let i = 10;
            const onClick = ()=>{i++}
            const component = render(<ChatList addChat={onClick} removeChat={emptyFunc} chats={[]}/>)
            const btn = component.getByRole('button')
            fireEvent.click(btn)
            expect(i).toEqual(11)
        }
    )
})