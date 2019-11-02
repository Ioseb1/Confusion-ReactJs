import React, { Component } from 'react';
import {Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
  } from "reactstrap";

class DishDetail extends Component {
    //Getting Time in a readable format
    renderDate(date) {
        return date.substring(0, 10);
    }

    //rendering Dish Card to display
    renderDish(dish) {
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
    renderComments(comments) {
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
                    <p>-- {comment.author}, {this.renderDate(comment.date)}</p>
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
    render() {
        if (this.props.dish != null) {
            return (
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        { this.renderDish(this.props.dish) }
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        { this.renderComments(this.props.dish.comments) }
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
}

export default DishDetail;