import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text,
} from '@react-email/components';
import * as React from 'react';

export const WaitlistEmail: React.FC = () => (
  <Html>
    <Head />
    <Preview>This is a preview.</Preview>
    <Body style={body}>
      <Container style={container}>
        <Heading style={heading}>This is a title.</Heading>
        <Text style={text}>
          This is the text of the email.
        </Text>
      </Container>
    </Body>
  </Html>
);

export default WaitlistEmail;

const body = {
  backgroundColor: '#F5F5F5',
  margin: '0 auto',
  borderRadius: '10px'
};

const container = {
  margin: 'auto',
  padding: '96px 20px 64px',
};

const heading = {
  color: '#242323',
  fontSize: '24px',
  fontWeight: '600',
  lineHeight: '40px',
  margin: '0 0 20px',
};

const text = {
  color: '#494949',
  fontSize: '14px',
  lineHeight: '24px',
  margin: '0 0 40px',
};
