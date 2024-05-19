import { Button, Form, InputGroup  } from 'react-bootstrap';
import './mousse.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from 'axios';


export function Mousse(){
    const navigate = useNavigate();
    const [mousse, setMousse] = useState({
        ingredientes: {
            leiteCondensado: "",
            cremeDeLeite: "",
            maracuja: "",
            gelatina: "",
        }
    });
    
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const handleClick = () => {
        navigate("/ingredientes");
    };

    function onSubmit(data) {
        axios
            .put(`https://precificacaounivesp-4deb95d7eb80.herokuapp.com/mousse/664a3f79ef45df898486743e`, {
                ingredientes: {
                    ...mousse.ingredientes,
                    ...data
                }
            })
            .then((response) => {
                console.log(data);
                navigate(`/ingredientes`);
            })
            .catch((error) => {
                console.log(error);
            });
    }
    
    
    useEffect(() =>{
        axios.get(`https://precificacaounivesp-4deb95d7eb80.herokuapp.com/mousse/664a3f79ef45df898486743e`)
            .then((response) =>{
                setMousse(response.data);
                const {
                    ingredientes: {
                        leiteCondensado,
                        cremeDeLeite,
                        maracuja,
                        gelatina,
                    }
                } = response.data;
                reset({
                    ingredientes: {
                        leiteCondensado,
                        cremeDeLeite,
                        maracuja,
                        gelatina,
                    }
                })
            });
    }, [reset]);
    

    return(
        <>
            <div className="main-ingredientes">
                <div className="container-ingredientes">
                    <div className="header-ingredientes">
                        <h1>Mousse de maracuja</h1>
                    </div>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group>
                            <InputGroup>
                                <Form.Label>Leite Condensado:</Form.Label>
                                <Form.Control
                                    {...register("leiteCondensado", { 
                                        required: true,
                                        pattern: {
                                            value: /^\d+(\.\d{1,2})?$/,
                                            message: "Insira um valor válido com no máximo duas casas decimais."
                                        } 
                                    })}
                                    defaultValue={typeof mousse.ingredientes.leiteCondensado === 'number' ? `${parseFloat(mousse.ingredientes.leiteCondensado).toFixed(2)}` : ""}
                                />
                                {errors.leiteCondensado && <span>{errors.leiteCondensado.message}</span>}
                            </InputGroup>
                        </Form.Group>

                        <Form.Group>
                            <InputGroup>
                                <Form.Label>Creme de leite:</Form.Label>
                                <Form.Control
                                    {...register("cremeDeLeite", { 
                                        required: true,
                                        pattern: {
                                            value: /^\d+(\.\d{1,2})?$/,
                                            message: "Insira um valor válido com no máximo duas casas decimais."
                                        } 
                                    })}
                                    defaultValue={typeof mousse.ingredientes.cremeDeLeite === 'number' ? `${parseFloat(mousse.ingredientes.cremeDeLeite).toFixed(2)}` : ""}
                                />
                                {errors.cremeDeLeite && <span>{errors.cremeDeLeite.message}</span>}
                            </InputGroup>
                        </Form.Group>

                        <Form.Group>
                            <InputGroup>
                                <Form.Label>Maracuja:</Form.Label>
                                <Form.Control
                                    {...register("maracuja", { 
                                        required: true,
                                        pattern: {
                                            value: /^\d+(\.\d{1,2})?$/,
                                            message: "Insira um valor válido com no máximo duas casas decimais."
                                        } 
                                    })}
                                    defaultValue={typeof mousse.ingredientes.maracuja === 'number' ? `${parseFloat(mousse.ingredientes.maracuja).toFixed(2)}` : ""}
                                />
                                {errors.maracuja && <span>{errors.maracuja.message}</span>}
                            </InputGroup>
                        </Form.Group>

                        <Form.Group>
                            <InputGroup>
                                <Form.Label>Gelatina:</Form.Label>
                                <Form.Control
                                    {...register("gelatina", { 
                                        required: true,
                                        pattern: {
                                            value: /^\d+(\.\d{1,2})?$/,
                                            message: "Insira um valor válido com no máximo duas casas decimais."
                                        } 
                                    })}
                                    defaultValue={typeof mousse.ingredientes.gelatina === 'number' ? `${parseFloat(mousse.ingredientes.gelatina).toFixed(2)}` : ""}
                                />
                                {errors.gelatina && <span>{errors.gelatina.message}</span>}
                            </InputGroup>
                        </Form.Group>

                        <div className="container-button">
                            <Button className='button-ingredientes' type="submit">Salvar alterações</Button>
                            <Button className='button-ingredientes' type="button" onClick={() => handleClick()}>Voltar aos cards</Button>
                        </div>
                    </Form>
                </div>
            </div>
        </>
    )}