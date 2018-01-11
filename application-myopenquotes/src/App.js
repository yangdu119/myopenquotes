import React from 'react'
import { Container, Divider, Dropdown, Grid, Header, Image, List, Menu, Segment, Card, Button} from 'semantic-ui-react'
import QuoteCard from './components/Card'
import SearchBar from './components/SearchBar'

const App = () => (
    <div>
        <Menu fixed='top' inverted className={'ui blue'}>
                <Menu.Item style={{ marginLeft: '6em' }} as='a' header >
                    My Open Quotes
                </Menu.Item>

                <SearchBar />
            <Button primary style={{ marginLeft: '50em' }}> New Quote </Button>
            <Button primary> Login </Button>

        </Menu>


            <div style={{ margin: '6em' }} className={"ui cards"}>
                <QuoteCard/>
                <QuoteCard/>
                <QuoteCard/>
                <QuoteCard/>
                <QuoteCard/>
                <QuoteCard/>
                <QuoteCard/>
                <QuoteCard/>
                <QuoteCard/>
                <QuoteCard/>
                <QuoteCard/>
                <QuoteCard/>
                <QuoteCard/>
                <QuoteCard/>
                <QuoteCard/>
                <QuoteCard/>
                <QuoteCard/>
                <QuoteCard/>

            </div>

        <Segment
            inverted
            vertical
            style={{ margin: '5em 0em 0em', padding: '5em 0em' }}
            className={'ui blue'}
        >
            <Container textAlign='center'>

                <Divider inverted section/>

                <List horizontal inverted divided link>
                    <List.Item as='a' href='#'>Site Map</List.Item>
                    <List.Item as='a' href='#'>Contact Us</List.Item>
                    <List.Item as='a' href='#'>Terms and Conditions</List.Item>
                    <List.Item as='a' href='#'>Privacy Policy</List.Item>
                </List>
            </Container>
        </Segment>
    </div>
)

export default App