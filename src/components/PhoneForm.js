import React, { Component } from 'react';

class PhoneForm extends Component {

    state = {
        name: '',
        phone: ''
    }

    handleChange = (e)=> {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handelSubmit = (e) => {
        // 새로 고침 방지
        e.preventDefault();
        this.props.onCreate(this.state);
    }

    render() {
        return (
            <form onSubmit={this.handelSubmit}>
                <input 
                    name="name"
                    placeholder="이름" 
                    onChange={this.handleChange} 
                    value={this.state.name}
                />
                <input 
                    name="phone"
                    placeholder="전화번호"
                    onChange={this.handleChange}
                    value={this.state.phone}
                />
                <button type="submit">등록</button>
                <div>
                    {this.state.name} <br />
                    {this.state.phone}
                </div>
            </form>
        );
    }
}

export default PhoneForm;