import React from 'react';
import { Button } from 'react-bootstrap';


export const TagElement = (props) => {

    console.log(props.tag);

    let getCardsWithTag = () => {
        let tag = props.tag;
        props.getCardListWithTag(tag);
    }

    return (

        <React.Fragment>
            <Button className="" onClick={getCardsWithTag} variant="dark">{props.tag}</Button>
        </React.Fragment>

    )

}