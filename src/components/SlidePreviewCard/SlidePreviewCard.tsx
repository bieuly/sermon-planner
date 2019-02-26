import React, { FunctionComponent } from 'react'
import { Card, Icon, SemanticCOLORS, SemanticICONS } from 'semantic-ui-react';
import { SlideTypes } from '../../models/Slide';

export interface Props {
    iconName: string;
    color: string
    slideType: SlideTypes;
}

const SlidePreviewCard: FunctionComponent<Props> = ({
    iconName,
    color,
    slideType
}) => (
    <Card color={color as SemanticCOLORS}>
        <Card.Content>
          <Card.Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
            pariatur dignissimos optio laudantium officiis, modi est, dolore
            quae delectus velit expedita sed adipisci eaque labore soluta?
            Perspiciatis dignissimos at reprehenderit.
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Icon name={iconName as SemanticICONS} /> {slideType}
        </Card.Content>
      </Card>
);

export default SlidePreviewCard;

