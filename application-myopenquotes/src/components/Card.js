import _ from 'lodash'
import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import faker from 'faker'


const QuoteCard = () => (
    <Card>
        <Image src={faker.random.image()} />
        <Card.Content>
            <Card.Header>
                {faker.name.findName()}
            </Card.Header>
            <Card.Meta>
            </Card.Meta>
            <Card.Description>
                {faker.lorem.sentences()}
            </Card.Description>
        </Card.Content>

        <Card.Content extra>
            <a>
                <Icon name='like' />
                22 Likes
            </a>
        </Card.Content>

    </Card>
)

export default QuoteCard
