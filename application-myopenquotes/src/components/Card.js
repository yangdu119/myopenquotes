import _ from 'lodash'
import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import faker from 'faker'


const QuoteCard = () => (
    <Card>
        <Image src={faker.internet.avatar()} />
        <Card.Content>
            <Card.Header>
                {faker.internet.userName()}
            </Card.Header>
            <Card.Meta>
        <span className='date'>
          Joined in 2015
        </span>
            </Card.Meta>
            <Card.Description>
                {faker.lorem.sentences()}
            </Card.Description>
        </Card.Content>
        <Card.Content extra>
            <a>
                <Icon name='user' />
                22 Friends
            </a>
        </Card.Content>
    </Card>
)

export default QuoteCard
