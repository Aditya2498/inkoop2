import React from 'react';
import {Cards} from './Cards';
import {Row,Col} from 'react-bootstrap';

export const Cardlist = ({CardData})=>(
    <div>
        <Row>
        {
        
        CardData.map((CardData,i) =>{
            return(<Col>
                <Cards
                key={i}
            id = {CardData.id}
            title = {CardData.title}
            img = {CardData.img}
            name = {CardData.name}
            />
            </Col>
            )}
            )
            
            
        }
        </Row>
    </div>
)