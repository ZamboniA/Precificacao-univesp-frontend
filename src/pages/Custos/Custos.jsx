import { Button, Form, InputGroup  } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from 'axios';


export function Custos(){
    const navigate = useNavigate();
    const [custos, setCustos] = useState({
        cobertura: "",
        recheio: "",
        sacosPlasticos: "",
        fita: "",
        etiqueta: "",
        custoFixo: "",
        custoVariaveis: "",
    });
    
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const handleClick = () => {
        navigate("/custos");
    };

    function onSubmit(data) {
        axios
            .put(`https://precificacaounivesp-4deb95d7eb80.herokuapp.com/custos/664a532ca0f3f3c984ece916`, data)
            .then((response) => {
                console.log(data);
                navigate(`/`);
            })
            .catch((error) => {
                console.log(error);
            });
    }
    
    
    useEffect(() => {
        axios.get(`https://precificacaounivesp-4deb95d7eb80.herokuapp.com/custos/664a532ca0f3f3c984ece916`)
            .then((response) => {
                setCustos(response.data[0]);
                console.log(custos)   
                const formattedCustos = {
                    cobertura: custos.cobertura.toFixed(2),
                    recheio: custos.recheio.toFixed(2),
                    sacosPlasticos: custos.sacosPlasticos.toFixed(2),
                    fita: custos.fita.toFixed(2),
                    etiqueta: custos.etiqueta.toFixed(2),
                    custoFixo: custos.custoFixo.toFixed(2),
                    custoVariaveis: custos.custoVariaveis.toFixed(2)
                };
    
                reset({
                    cobertura: formattedCustos.cobertura,
                    recheio: formattedCustos.recheio,
                    sacosPlasticos: formattedCustos.sacosPlasticos,
                    fita: formattedCustos.fita,
                    etiqueta: formattedCustos.etiqueta,
                    custoFixo: formattedCustos.custoFixo,
                    custoVariaveis: formattedCustos.custoVariaveis
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }, [reset]);
    
    
    
    return(
        <>
            <div className="main-ingredientes">
                <div className="container-ingredientes">
                    <div className="header-ingredientes">
                        <h1>Custos</h1>
                    </div>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group>
                        <InputGroup>
                            <h2 className="subtitulo">Cobertura e recheio:</h2>
                            <Form.Label>Cobertura:</Form.Label>
                            <Form.Control
                                {...register("cobertura", { 
                                    required: true,
                                    pattern: {
                                        value: /^\d+(\.\d{1,2})?$/,
                                        message: "Insira um valor válido com no máximo duas casas decimais."
                                    } 
                                })}
                                defaultValue={parseFloat(custos.cobertura).toFixed(2)}
                            />
                            {errors.cobertura && <span>{errors.cobertura.message}</span>}
                        </InputGroup>
                        </Form.Group>
                        <Form.Group>
                            <InputGroup>
                                <Form.Label>Recheio:</Form.Label>
                                <Form.Control
                                    {...register("recheio", { 
                                        required: true,
                                        pattern: {
                                            value: /^\d+(\.\d{1,2})?$/,
                                            message: "Insira um valor válido com no máximo duas casas decimais."
                                        } 
                                    })}
                                    defaultValue={typeof custos.recheio === 'number' ? parseFloat(custos.recheio).toFixed(2) : ""}
                                />
                                {errors.recheio && <span>{errors.recheio.message}</span>}
                            </InputGroup>
                        </Form.Group>

                        <Form.Group>
                            <InputGroup>
                                <h2  className="subtitulo">Embalagem: </h2>
                                <Form.Label>Sacos Plásticos:</Form.Label>
                                <Form.Control
                                    {...register("sacosPlasticos", { 
                                        required: true,
                                        pattern: {
                                            value: /^\d+(\.\d{1,2})?$/,
                                            message: "Insira um valor válido com no máximo duas casas decimais."
                                        } 
                                    })}
                                    defaultValue={custos.sacosPlasticos}
                                />
                                {errors.sacosPlasticos && <span>{errors.sacosPlasticos.message}</span>}
                            </InputGroup>
                        </Form.Group>

                        <Form.Group>
                            <InputGroup>
                                <Form.Label>Fita:</Form.Label>
                                <Form.Control
                                    {...register("fita", { 
                                        required: true,
                                        pattern: {
                                            value: /^\d+(\.\d{1,2})?$/,
                                            message: "Insira um valor válido com no máximo duas casas decimais."
                                        } 
                                    })}
                                    defaultValue={custos.fita}
                                />
                                {errors.fita && <span>{errors.fita.message}</span>}
                            </InputGroup>
                        </Form.Group>


                        <Form.Group>
                            <InputGroup>
                                <Form.Label>Etiqueta:</Form.Label>
                                <Form.Control
                                    {...register("etiqueta", { 
                                        required: true,
                                        pattern: {
                                            value: /^\d+(\.\d{1,2})?$/,
                                            message: "Insira um valor válido com no máximo duas casas decimais."
                                        } 
                                    })}
                                    defaultValue={custos.etiqueta}
                                />
                                {errors.etiqueta && <span>{errors.etiqueta.message}</span>}
                            </InputGroup>
                        </Form.Group>

                        <Form.Group>
                            <InputGroup>
                                <h2  className="subtitulo">Outros custos:</h2>
                                <Form.Label>Custo Fixo:</Form.Label>
                                <Form.Control
                                    {...register("custoFixo", { 
                                        required: true,
                                        pattern: {
                                            value: /^\d+(\.\d{1,2})?$/,
                                            message: "Insira um valor válido com no máximo duas casas decimais."
                                        } 
                                    })}
                                    defaultValue={custos.custoFixo}
                                />
                                {errors.custoFixo && <span>{errors.custoFixo.message}</span>}
                            </InputGroup>
                        </Form.Group>

                        <Form.Group>
                            <InputGroup>
                                <Form.Label>Custo Variáveis:</Form.Label>
                                <Form.Control
                                    {...register("custoVariaveis", { 
                                        required: true,
                                        pattern: {
                                            value: /^\d+(\.\d{1,2})?$/,
                                            message: "Insira um valor válido com no máximo duas casas decimais."
                                        } 
                                    })}
                                    defaultValue={custos.custoVariaveis}
                                />
                                {errors.custoVariaveis && <span>{errors.custoVariaveis.message}</span>}
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