import React, { Component } from 'react';
import {Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    Breadcrumb,
    BreadcrumbItem,
    Modal,
    Label,
    Button,
    ModalHeader,
    Row,
    Col,
    ModalBody
  } from "reactstrap";
  import { Link } from 'react-router-dom';
  import { Control, LocalForm, Errors } from 'react-redux-form';

    //Getting Time in a readable format
    /*renderDate(date) {
        return date.substring(0, 10);
    }*/
    const maxLength = (len) => (val) => !(val) || (val.length <= len);
    const minLength = (len) => (val) => val && (val.length >= len);

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
                            <CommentForm />
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

   export class CommentForm extends Component {
        constructor(props) {
            super(props);

            this.state = {
                isModalOpen: false
            }

            this.toggleModal = this.toggleModal.bind(this);
        }

        toggleModal() {
            this.setState({
                isModalOpen: !this.state.isModalOpen
            });
        }

        handleSubmit(values) {
            console.log("Current state is: " + JSON.stringify(values));
            alert("Current state is: " + JSON.stringify(values));
        }

        render() {
            const button = () => {
                return (
                   <div>

                   </div>
                );
            }

            return (
               <div>
                <Button outline onClick={ this.toggleModal }> 
                    <span className="fa fa-pencil fa-lg"></span> Submit Comment 
                </Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                        <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                        <ModalBody>
                            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                                <Row className="form-group">
                                    <Label htmlFor=".rating" md={2}>Rating</Label>
                                    <Col md={12}>
                                        <Control.select model=".rating" id="rating" name="rating"
                                            className="form-control">
                                                <option value="0"></option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </Control.select>
                                    </Col>
                                </Row>

                                <Row className="form-group">
                                    <Label htmlFor=".firstname" md={4}>Your Name</Label>
                                    <Col md={12}>
                                        <Control.text model=".name" id="model" name="name"
                                            className="form-control"
                                            validators={{
                                                minLength: minLength(2), maxLength: maxLength(15)
                                            }}
                                        />
                                        <Errors
                                            className="text-danger"
                                            model=".name"
                                            show="touched"
                                            messages={{
                                                minLength: 'Must be greater that 2 characters',
                                                maxLength: 'Must be 15 characters or less'
                                            }}
                                        />
                                    </Col>
                                </Row>

                                <Row className="form-group">
                                    <Label htmlFor=".text" md="4">Comment</Label>
                                    <Col md={12}>
                                        <Control.textarea model=".message" id="feedback" name="message"
                                            rows="6"
                                            className="form-control"/>
                                    </Col>
                                </Row>

                                <Row className="form-group">
                                    <Col>
                                        <Button type="submit" color="primary">
                                            Submit    
                                        </Button> 
                                    </Col>                            
                                </Row>
                            </LocalForm>
                        </ModalBody>
                    </Modal>
                    </div>
            );
        }
   } 

export default DishDetail;