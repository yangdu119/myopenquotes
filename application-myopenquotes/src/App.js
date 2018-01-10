import React from 'react'
import { Container, Divider, Dropdown, Grid, Header, Image, List, Menu, Segment } from 'semantic-ui-react'
import QuoteCard from './components/Card'
import SearchBar from './components/SearchBar'

const App = () => (
    <div>
        <Menu fixed='top' inverted>
            <Container>
                <Menu.Item as='a' header >
                    {/*<Image*/}
                        {/*size='mini'*/}
                        {/*src='/logo.svg'*/}
                        {/*style={{ marginRight: '1.5em' }}*/}
                    {/*/>*/}
                    My Open Quotes
                </Menu.Item>

                <SearchBar/>
            </Container>
        </Menu>

        <Container text style={{ marginTop: '7em' }}>
            <QuoteCard/>

        </Container>

        <Segment
            inverted
            vertical
            style={{ margin: '5em 0em 0em', padding: '5em 0em' }}
        >
            <Container textAlign='center'>

                <Divider inverted section />

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