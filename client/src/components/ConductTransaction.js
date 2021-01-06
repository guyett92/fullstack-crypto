import React, { Component } from 'react';
import { FormControl, FormGroup, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import history from '../history';

class ConductTransaction extends Component {
    state = { recipient: '', amount: 0 };

    updateRecipient = event => {
        this.setState({ recipient: event.target.value });
    }

    // Fix to the number conversion no longer supported (TypeScript only)
    updateAmount = event => {
        this.setState({ amount: event.target.value ? parseInt(event.target.value) : 0 });
    }

    conductTransaction = () => {
        const { recipient, amount } = this.state;

        fetch(`${document.location.origin}/api/transact`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ recipient, amount }) 
        }).then(response => response.json())
        .then(json => {
            alert(json.message || json.type);
            history.push('/transaction-pool');
        });
    }


    render() {
        return(
            <div className='ConductTransaction'>
                <Link to='/'>Home</Link>
                <h3>Conduct a Transaction</h3>
                <FormGroup>
                    <FormControl
                        input='text'
                        placeholder='Recipient'
                        value={this.state.recipient}
                        onChange={this.updateRecipient}
                    />
                </FormGroup>
                <FormGroup>
                <FormControl
                        input='number'
                        placeholder='Amount'
                        value={this.state.amount}
                        onChange={this.updateAmount}
                />
                </FormGroup>
                <div>
                    <Button 
                        bsStyle="danger"
                        onClick={this.conductTransaction}
                    >
                        Submit
                    </Button>
                </div>
            </div>
        )
    }
}

export default ConductTransaction;