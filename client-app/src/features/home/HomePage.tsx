import { Link } from "react-router-dom";
import { Container, Header, Segment, Image, Button } from "semantic-ui-react";
import { useStore } from "../../app/stores/store";
import { observer } from "mobx-react-lite";
import LoginForm from "../users/LoginForm";
import SignupForm from "../users/SignupForm";

export default observer(function HomePage() {
    const {userStore, modalStore} = useStore();

    return (
        <Segment inverted textAlign="center" vertical className="masthead">
            <Container text>
                <Header as='h1' inverted>
                    <Image size="massive" src="/assets/logo.png" alt="logo" style={{marginTop: 12}} />
                    Activities Tracker
                </Header>
                {userStore.isLoggedIn ? (
                    <>
                        <Header as="h2" inverted content="The event management app for your past and future activities!" />
                        <Button as={Link} to="/activities" size="huge" inverted>
                            Enter your Activities Tracker!
                        </Button>
                    </>
                ) : (
                    <>
                        <Button onClick={() => modalStore.openModal(<LoginForm />)} size="huge" inverted>
                            Login!
                        </Button>
                        <Button onClick={() => modalStore.openModal(<SignupForm />)} size="huge" inverted>
                            Signup!
                        </Button>
                    </>
                    
                )}
                
            </Container>
        </Segment>
    )
})