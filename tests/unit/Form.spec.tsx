import { Form } from '@/components/form';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Test <Footer /> component', () => {
  beforeEach(() => {});
  it('Should be in the component', () => {
    render(<Form />);
    const formTitle = screen.getByText('Send a message');

    const labelEmail = screen.getByText(/email address/i);
    const labelFullname = screen.getByText(/fullname/i);
    const labelPhone = screen.getByText(/phone number/i);
    const labelMessage = screen.getByText(/your message/i);
    const submitButton = screen.getByTestId('submit-button');

    expect(formTitle).toBeInTheDocument();

    expect(labelEmail).toBeInTheDocument();
    expect(labelFullname).toBeInTheDocument();
    expect(labelPhone).toBeInTheDocument();
    expect(labelMessage).toBeInTheDocument();

    expect(getEmail()).toBeInTheDocument();
    expect(getFullname()).toBeInTheDocument();
    expect(getPhone()).toBeInTheDocument();
    expect(getMessage()).toBeInTheDocument();

    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toHaveTextContent(/Submit/);
  });

  it('Should get correct values', async () => {
    render(<Form />);

    await userEvent.type(getEmail(), 'hernie1@mail.com');
    await userEvent.type(getFullname(), 'Hernie');
    await userEvent.type(getPhone(), '123456789');
    await userEvent.type(getMessage(), 'Hello, i am Hernie');

    expect(getEmail().value).toBe('hernie1@mail.com');
    expect(getFullname().value).toBe('Hernie');
    expect(getPhone().value).toBe('123456789');
    expect(getMessage().value).toBe('Hello, i am Hernie');
  });

  const getEmail = () => {
    return screen.getByTestId('input-email') as HTMLInputElement;
  };
  const getFullname = () => {
    return screen.getByTestId('input-fullname') as HTMLInputElement;
  };
  const getPhone = () => {
    return screen.getByTestId('input-phone') as HTMLInputElement;
  };
  const getMessage = () => {
    return screen.getByTestId('input-message') as HTMLTextAreaElement;
  };
});
