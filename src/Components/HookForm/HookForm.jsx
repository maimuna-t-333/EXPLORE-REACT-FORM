import React from 'react';
import useInputField from '../../hooks/useInputFiels';

const HookForm = () => {

    const [name, nameOnChange]=useInputField('')
    const [email, EmailOnChange]=useInputField('')
    const [pass, passOnChange]=useInputField('')
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log('submitted', name,email,pass)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={nameOnChange} defaultValue={name} />
                <br />
                <input type="email" onChange={EmailOnChange} defaultValue={email} />
                <br />
                <input type="password" onChange={passOnChange} defaultValue={pass} />
                <br />
                <input type="submit" value="Submit" />
                <br />
                
            </form>
        </div>
    );
};

export default HookForm;