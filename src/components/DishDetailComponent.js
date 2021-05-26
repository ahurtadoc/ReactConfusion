import {Component} from "react";
import {Card, CardBody, CardImg, CardText, CardTitle} from "reactstrap";

class DishDetail extends Component {

    renderDish(dish) {
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

    transformDate(date){
        // date = (new Date(date));
        return(new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(date))));
    }

    renderComments(comments){
        if(comments){
            const commentList = comments.map((comment) => {
                return (
                    <ul className="list-unstyled" key={comment.id}>
                        <li>{comment.comment}</li>
                        <li>-- {comment.author}, {this.transformDate(comment.date)}</li>
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

    render() {
        const dish = this.props.dish;

        if (dish){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(dish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComments(dish.comments)}
                    </div>
                </div>
            </div>
        );
        }else {
            return ( <div/>)
        }
    }
}

export default DishDetail;
