import React from 'react';
<<<<<<< HEAD
=======
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle} from 'reactstrap';

function RenderCard({item}) {
    
    return(
        <Card>
            <CardImg src={item.image} alt={item.name} />
            <CardBody>
            <CardTitle>{item.name}</CardTitle>
            {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null }
            <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
    );
}
>>>>>>> fix-detached-HEAD

function Home(props) {
    return (
        <div className="container">
<<<<<<< HEAD
            <h4>Home</h4>
            <div>
                To be continued...
=======
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.dish} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.promotion} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.leader} />
                </div>
>>>>>>> fix-detached-HEAD
            </div>
        </div>
    );
}

export default Home;