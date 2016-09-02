import React from 'react';
import {Link} from 'react-router';
import { Header, Card, Icon, Button, Input } from 'stardust';
import '../styles/login-page.css';


const LoginPage = () => {
  return (
    <div>
        <Card centered={true}>
          <Card.Content>
            <Card.Header>
              <Header as="h2">Login</Header>
            </Card.Header>
            <Card.Description>
              <Input className="icon login-input" icon="user" placeholder="Username" />
              <Input className="icon login-input" icon="privacy" placeholder="Password" />
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Link to="/badlink">Contact Admin</Link>
            <Link to="dashboard"> 
            <Button className="primary login-button">
                 <Icon name="sign in" /> Login
            </Button>
            </Link>
          </Card.Content>
        </Card>
    </div>
  );
};

export default LoginPage;
