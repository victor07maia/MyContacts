import propTypes from "prop-types"
import { useState } from "react";

import useErros from "../../hooks/useErros";
import isEmailValid from "../../utils/isEmailValid";
import isFormatPhone from "../../utils/isFormatPhone"

import { ButtonForm, Form } from "./Styles";

import Select from "../../components/Select/Select";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import FormGroup from "../FormGroup";



export default function ContactForm({ buttonLabel}) {
    const[name, setName] = useState('');
    const[email, setEmail] = useState('');
    const[phone, setPhone] = useState('');
    const[category, setCategory] = useState('');

    const { setError, removeError, getErrorMessageByFieldName, erros} = useErros();

    const isFormValid = (name && erros.length === 0);

    function handleNameChange(event) {
       setName(event.target.value);

       if (!event.target.value.trim()) {
        setError({ field: 'name', message: 'Nome é obrigatorio'});
       } else{
           removeError('name')
       }
    }

    function handleEmailChange(event) {
        setEmail(event.target.value );

        if (event.target.value && !isEmailValid(event.target.value)) {
            setError({ field: 'email', message: 'E-mail invalido'});
        } else {
            removeError('email')
        }
    }

    function handlePhoneChange(event) {
        setPhone(isFormatPhone(event.target.value));}

    function handleSubmit(event){
        console.log( phone.replace(/\D/g, '') )
    }

    return(
    <Form onSubmit={handleSubmit} noValidate>

        <FormGroup error={getErrorMessageByFieldName('name')}>
            <Input
            placeholder='Nome*'
            value={name}
            onChange={handleNameChange}
            error={getErrorMessageByFieldName('name')}
            />
        </FormGroup>

        <FormGroup error={getErrorMessageByFieldName('email')}>
            <Input
            type='email'
            placeholder='E-mail'
            error
            value={email}
            onChange={handleEmailChange}
            error={getErrorMessageByFieldName('email')}
            />
        </FormGroup>

        <FormGroup>
            <Input
            type='tel'
            placeholder='Telefone'
            maxLength='15'
            value={phone}
            onChange={handlePhoneChange}
            />
        </FormGroup>

        <FormGroup>
            <Select
            placeholder='categoria'
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            >
                <option value=''> categoria </option>
                <option value='1'> Instagram </option>
                <option value='2'> Facebook </option>
                <option value='3'> Vida </option>
            </Select>
        </FormGroup>

        <ButtonForm>
            <Button
            type='submit'
            disabled={!isFormValid}
            >
                {buttonLabel}

            </Button>
        </ButtonForm>

    </Form>
    )
};

ContactForm.propTypes = {
    buttonLabel: propTypes.string.isRequired,
}
