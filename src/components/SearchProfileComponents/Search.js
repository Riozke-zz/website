import React from 'react';
import { Form } from 'semantic-ui-react';

const SearchInput = (props) => {
    <div className="search">
        <Form onSubmit={props.handleSubmit}>
            <Form.Group>
                <Form.Input placeholder='User' name='user' onChange={props.handleSearch}/>
                <Form.Button content='Search'/>
            </Form.Group>
        </Form>
    </div>
}

export default SearchInput;