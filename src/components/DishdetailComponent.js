import React from 'react';
import {Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    Breadcrumb,
    BreadcrumbItem
  } from "reactstrap";
  import { Link } from 'react-router-dom';

    //Getting Time in a readable format
    /*renderDate(date) {
        return date.substring(0, 10);
    }*/

    //rendering Dish Card to display
    function RenderDish({dish}) {
        return (
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    }

    //rendering comments to display
    function RenderComments({comments}) {
        if (comments == null || comments.length === 0) {
            return (
                <div>

                </div>
            );
        }

        const renderedComments = comments.map((comment) => {
            return (
                <li>
                    <p>{comment.comment}</p>
                    <p>-- {comment.author}, {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                </li>
            );
        });

        //Displaying renderedComments
        return (
            <div>
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    { renderedComments }
                </ul>
            </div>
        );
    }

    //rendering the dish with comments
    const DishDetail = (props) => {
        if (props.dish != null) {
            return (
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{props.dish.name}</h3>
                            <hr />
                        </div>                
                    </div>
                    
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <RenderDish dish={props.dish} />
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            <RenderComments comments={props.comments} />
                        </div>
                    </div>
                </div>
            );
        }
        else {
            return (
                <div>

                </div>
            );
        }
    }

export default DishDetail;