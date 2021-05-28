import {Component} from "react";
import {Breadcrumb, BreadcrumbItem, Card, CardBody, CardImg, CardText, CardTitle} from "reactstrap";
import {Link} from "react-router-dom";


function RenderDish({dish}) {
        return (
            <Card>
                <CardImg top src={dish.image} alt={dish.name}/>
                <CardBody>
                    <CardTitle >{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        )
}

function transformDate(date){
    // date = (new Date(date));
    return(new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(date))));
}

function RenderComments({comments}){
    if(comments){
        const commentList = comments.map((comment) => {
            return (
                <ul className="list-unstyled" key={comment.id}>
                    <li>{comment.comment}</li>
                    <li>-- {comment.author}, {transformDate(comment.date)}</li>
                </ul>
            )
        })
        return (
            <div>
                <h4>Comments</h4>
                <div>{commentList}</div>
            </div>
        )
    }else{
        return ( <div/> )
    }
}

const DishDetail = (props) => {
    const dish = props.dish;

    if (dish){
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem ><Link to='/menu'>Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{dish.name}</h3>
                        <hr/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={dish}/>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={props.comments}/>
                    </div>
                </div>
            </div>
        );
    }else {
        return ( <div/>)
    }
}

export default DishDetail;
