import { Button, Form, InputGroup  } from 'react-bootstrap';
import './brownie.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from 'axios';


export function Brownie(){
    const navigate = useNavigate();
    const [brownie, setBrownie] = useState({
        ingredientes: {
            chocolateMeioAmargo: "",
            manteiga: "",
            acucar: "",
            farinhaDeTrigo: "",
            sal: "",
            ovos: ""
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
        console.log(data)
        axios
            .put(`https://precificacaounivesp-4deb95d7eb80.herokuapp.com/brownie/6631bcdea98aaf64bb5a61d9`, {
                ingredientes: {
                    ...brownie.ingredientes,
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
        axios.get(`https://precificacaounivesp-4deb95d7eb80.herokuapp.com/brownie/6631bcdea98aaf64bb5a61d9`)
            .then((response) =>{
                setBrownie(response.data);
                const {
                    ingredientes: {
                        chocolateMeioAmargo,
                        manteiga,
                        acucar,
                        farinhaDeTrigo,
                        sal,
                        ovos
                    }
                } = response.data;
                reset({
                    ingredientes: {
                        chocolateMeioAmargo,
                        manteiga,
                        acucar,
                        farinhaDeTrigo,
                        sal,
                        ovos
                    }
                })
            });
    }, [reset]);
    

    return(
        <>
            <div className="main-ingredientes">
                <div className="container-ingredientes">
                    <div className="header-ingredientes">
                        <h1>Brownie</h1>
                    </div>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group>
                            <InputGroup>
                                <Form.Label>Chocolate Meio Amargo:</Form.Label>
                                <Form.Control
                                    {...register("chocolateMeioAmargo", { 
                                        required: true,
                                        pattern: {
                                            value: /^\d+(\.\d{1,2})?$/,
                                            message: "Insira um valor válido com no máximo duas casas decimais."
                                        } 
                                    })}
                                    defaultValue={typeof brownie.ingredientes.chocolateMeioAmargo === 'number' ? `${parseFloat(brownie.ingredientes.chocolateMeioAmargo).toFixed(2)}` : ""}
                                />
                                {errors.chocolateMeioAmargo && <span>{errors.chocolateMeioAmargo.message}</span>}
                            </InputGroup>
                        </Form.Group>

                        <Form.Group>
                            <InputGroup>
                                <Form.Label>Manteiga:</Form.Label>
                                <Form.Control
                                    {...register("manteiga", { 
                                        required: true,
                                        pattern: {
                                            value: /^\d+(\.\d{1,2})?$/,
                                            message: "Insira um valor válido com no máximo duas casas decimais."
                                        } 
                                    })}
                                    defaultValue={typeof brownie.ingredientes.manteiga === 'number' ? `${parseFloat(brownie.ingredientes.manteiga).toFixed(2)}` : ""}
                                />
                                {errors.manteiga && <span>{errors.manteiga.message}</span>}
                            </InputGroup>
                        </Form.Group>

                        <Form.Group>
                            <InputGroup>
                                <Form.Label>Açúcar:</Form.Label>
                                <Form.Control
                                    {...register("acucar", { 
                                        required: true,
                                        pattern: {
                                            value: /^\d+(\.\d{1,2})?$/,
                                            message: "Insira um valor válido com no máximo duas casas decimais."
                                        } 
                                    })}
                                    defaultValue={typeof brownie.ingredientes.acucar === 'number' ? `${parseFloat(brownie.ingredientes.acucar).toFixed(2)}` : ""}
                                />
                                {errors.acucar && <span>{errors.acucar.message}</span>}
                            </InputGroup>
                        </Form.Group>

                        <Form.Group>
                            <InputGroup>
                                <Form.Label>Farinha de Trigo:</Form.Label>
                                <Form.Control
                                    {...register("farinhaDeTrigo", { 
                                        required: true,
                                        pattern: {
                                            value: /^\d+(\.\d{1,2})?$/,
                                            message: "Insira um valor válido com no máximo duas casas decimais."
                                        } 
                                    })}
                                    defaultValue={typeof brownie.ingredientes.farinhaDeTrigo === 'number' ? `${parseFloat(brownie.ingredientes.farinhaDeTrigo).toFixed(2)}` : ""}
                                />
                                {errors.farinhaDeTrigo && <span>{errors.farinhaDeTrigo.message}</span>}
                            </InputGroup>
                        </Form.Group>

                        <Form.Group>
                            <InputGroup>
                                <Form.Label>Sal:</Form.Label>
                                <Form.Control
                                    {...register("sal", { 
                                        required: true,
                                        pattern: {
                                            value: /^\d+(\.\d{1,2})?$/,
                                            message: "Insira um valor válido com no máximo duas casas decimais."
                                        } 
                                    })}
                                    defaultValue={typeof brownie.ingredientes.sal === 'number' ? `${parseFloat(brownie.ingredientes.sal).toFixed(2)}` : ""}
                                />
                                {errors.sal && <span>{errors.sal.message}</span>}
                            </InputGroup>
                        </Form.Group>

                        <Form.Group>
                            <InputGroup>
                                <Form.Label>Ovos:</Form.Label>
                                <Form.Control
                                    {...register("ovos", { 
                                        required: true,
                                        pattern: {
                                            value: /^\d+(\.\d{1,2})?$/,
                                            message: "Insira um valor válido com no máximo duas casas decimais."
                                        } 
                                    })}
                                    defaultValue={typeof brownie.ingredientes.ovos === 'number' ? `${parseFloat(brownie.ingredientes.ovos).toFixed(2)}` : ""}
                                />
                                {errors.ovos && <span>{errors.ovos.message}</span>}
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