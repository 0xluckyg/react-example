import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import {createPost} from '../actions/index';

class PostNew extends Component {

    render(){
        const { fields: {title, categories, content}, handleSubmit} = this.props;
        //same as const handleSubmit = this.props.handleSubmit
        //const title = this.props.fields.title

        return(
            <form onSubmit={handleSubmit(this.props.createPost)}>
                <h3>create new content</h3>
                <div className="form-group">
                    <label>Title</label>
                    <input type="text" className="form-control" {...title}/>
                    {/*{...title} is like saying onChange={title.onChange} for every element in title */}
                </div>
                <div className="form-group">
                    <label>Categories</label>
                    <input type="text" className="form-control" {...categories}/>
                </div>
                <div className="form-group">
                    <label>Content</label>
                    <textarea type="text" className="form-control" {...content}/>
                </div>
                <button type="submit" className="btn btn-primary">submit</button>
            </form>
        );
    }
}

//Redux form is similar to connect. 1st arg: config, 2nd arg: mapStateToProps, 3rd arg: mapDispatchToProps
export default reduxForm({
    form: 'PostNewToken',
    fields: ['title', 'categories','content']
}, null, {createPost})(PostNew);
