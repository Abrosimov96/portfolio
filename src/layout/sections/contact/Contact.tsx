import styled from 'styled-components';
import { Button } from '../../../componets/Button';
import { Container } from '../../../componets/Container';
import { SectionTitle } from '../../../componets/SectionTitle';
import { theme } from '../../../styles/Theme';

export const Contact = () => {
  return (
    <StyledContact>
      <Container>
        <SectionTitle>Contact</SectionTitle>
        <StyledForm>
          <Field placeholder={'Name'} />
          <Field placeholder={'Subject'} />
          <Field placeholder={'Message...'} as={'textarea'} />
          <Button type={'submit'}>Send Message</Button>
        </StyledForm>
      </Container>
    </StyledContact>
  );
};

const StyledContact = styled.section``;

const StyledForm = styled.form`
  margin: 0 auto;
  max-width: 540px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  textarea {
    resize: none;
    height: 155px;
  }
`;

const Field = styled.input`
  width: 100%;
  border: 1px solid ${theme.colors.borderColor};
  background-color: ${theme.colors.secondaryBg};
  padding: 7px 15px;

  color: ${theme.colors.font};
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.6px;

  &::placeholder {
    color: ${theme.colors.placeholderColor};
    text-transform: capitalize;
  }

  &:focus-visible {
    outline: 1px solid ${theme.colors.borderColor};
  }
`;
