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
  backgroundColor: '#21222c',
  margin: '0 auto',
  borderRadius: '10px'
};

const container = {
  margin: 'auto',
  padding: '96px 20px 64px',
};

const heading = {
  color: '#bd85c7',
  fontSize: '26px',
  fontWeight: '600',
  lineHeight: '40px',
  margin: '0 0 20px',
};

const text = {
  color: '#6272a4',
  fontSize: '16px',
  lineHeight: '24px',
  margin: '0 0 40px',
};
