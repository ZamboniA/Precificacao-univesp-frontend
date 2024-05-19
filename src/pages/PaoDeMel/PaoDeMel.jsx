import { Button, Form, InputGroup  } from 'react-bootstrap';
import './paoDeMel.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from 'axios';


export function PaoDeMel(){
    const navigate = useNavigate();
    const [paoDeMel, setPaoDeMel] = useState({
        ingredientes: {
            chocolateMeioAmargo: "",
            manteiga: "",
            acucar: "",
            farinhaDeTrigo: "",
            baunilha: "",
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
        axios
            .put(`http://localhost:3001/paodemel/664a3d361f57863653e7cb7a`, {
                ingredientes: {
                    ...paoDeMel.ingredientes,
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
        axios.get(`http://localhost:3001/paodemel/664a3d361f57863653e7cb7a`)
            .then((response) =>{
                setPaoDeMel(response.data);
                const {
                    ingredientes: {
                        mel,
                        manteiga,
                        leiteIntegral,
                        cacau,
                        fermentoQuimico,
                        canelaPo,
                        cravoPo,
                        acucar,
                        farinhaDeTrigo,
                        baunilha,
                        ovos
                    }
                } = response.data;
                reset({
                    ingredientes: {
                        mel,
                        manteiga,
                        leiteIntegral,
                        cacau,
                        fermentoQuimico,
                        canelaPo,
                        cravoPo,
                        acucar,
                        farinhaDeTrigo,
                        baunilha,
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
                        <h1>Pão de mel</h1>
                    </div>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group>
                            <InputGroup>
                                <Form.Label>Mel:</Form.Label>
                                <Form.Control
                                    {...register("mel", { 
                                        required: true,
                                        pattern: {
                                            value: /^\d+(\.\d{1,2})?$/,
                                            message: "Insira um valor válido com no máximo duas casas decimais."
                                        } 
                                    })}
                                    defaultValue={typeof paoDeMel.ingredientes.mel === 'number' ? `${parseFloat(paoDeMel.ingredientes.mel).toFixed(2)}` : ""}
                                />
                                {errors.mel && <span>{errors.mel.message}</span>}
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
                                    defaultValue={typeof paoDeMel.ingredientes.manteiga === 'number' ? `${parseFloat(paoDeMel.ingredientes.manteiga).toFixed(2)}` : ""}
                                />
                                {errors.manteiga && <span>{errors.manteiga.message}</span>}
                            </InputGroup>
                        </Form.Group>

                        <Form.Group>
                            <InputGroup>
                                <Form.Label>Leite integral:</Form.Label>
                                <Form.Control
                                    {...register("leiteIntegral", { 
                                        required: true,
                                        pattern: {
                                            value: /^\d+(\.\d{1,2})?$/,
                                            message: "Insira um valor válido com no máximo duas casas decimais."
                                        } 
                                    })}
                                    defaultValue={typeof paoDeMel.ingredientes.leiteIntegral === 'number' ? `${parseFloat(paoDeMel.ingredientes.leiteIntegral).toFixed(2)}` : ""}
                                />
                                {errors.leiteIntegral && <span>{errors.leiteIntegral.message}</span>}
                            </InputGroup>
                        </Form.Group>

                        <Form.Group>
                            <InputGroup>
                                <Form.Label>Cacau:</Form.Label>
                                <Form.Control
                                    {...register("cacau", { 
                                        required: true,
                                        pattern: {
                                            value: /^\d+(\.\d{1,2})?$/,
                                            message: "Insira um valor válido com no máximo duas casas decimais."
                                        } 
                                    })}
                                    defaultValue={typeof paoDeMel.ingredientes.cacau === 'number' ? `${parseFloat(paoDeMel.ingredientes.cacau).toFixed(2)}` : ""}
                                />
                                {errors.cacau && <span>{errors.cacau.message}</span>}
                            </InputGroup>
                        </Form.Group>

                        <Form.Group>
                            <InputGroup>
                                <Form.Label>Fermento químico:</Form.Label>
                                <Form.Control
                                    {...register("fermentoQuimico", { 
                                        required: true,
                                        pattern: {
                                            value: /^\d+(\.\d{1,2})?$/,
                                            message: "Insira um valor válido com no máximo duas casas decimais."
                                        } 
                                    })}
                                    defaultValue={typeof paoDeMel.ingredientes.fermentoQuimico === 'number' ? `${parseFloat(paoDeMel.ingredientes.fermentoQuimico).toFixed(2)}` : ""}
                                />
                                {errors.fermentoQuimico && <span>{errors.fermentoQuimico.message}</span>}
                            </InputGroup>
                        </Form.Group>

                        <Form.Group>
                            <InputGroup>
                                <Form.Label>Canela em pó:</Form.Label>
                                <Form.Control
                                    {...register("canelaPo", { 
                                        required: true,
                                        pattern: {
                                            value: /^\d+(\.\d{1,2})?$/,
                                            message: "Insira um valor válido com no máximo duas casas decimais."
                                        } 
                                    })}
                                    defaultValue={typeof paoDeMel.ingredientes.canelaPo === 'number' ? `${parseFloat(paoDeMel.ingredientes.canelaPo).toFixed(2)}` : ""}
                                />
                                {errors.canelaPo && <span>{errors.canelaPo.message}</span>}
                            </InputGroup>
                        </Form.Group>

                        <Form.Group>
                            <InputGroup>
                                <Form.Label>Cravo em pó:</Form.Label>
                                <Form.Control
                                    {...register("cravoPo", { 
                                        required: true,
                                        pattern: {
                                            value: /^\d+(\.\d{1,2})?$/,
                                            message: "Insira um valor válido com no máximo duas casas decimais."
                                        } 
                                    })}
                                    defaultValue={typeof paoDeMel.ingredientes.cravoPo === 'number' ? `${parseFloat(paoDeMel.ingredientes.cravoPo).toFixed(2)}` : ""}
                                />
                                {errors.cravoPo && <span>{errors.cravoPo.message}</span>}
                            </InputGroup>
                        </Form.Group>

                        <Form.Group>
                            <InputGroup>
                                <Form.Label>Açucar:</Form.Label>
                                <Form.Control
                                    {...register("acucar", { 
                                        required: true,
                                        pattern: {
                                            value: /^\d+(\.\d{1,2})?$/,
                                            message: "Insira um valor válido com no máximo duas casas decimais."
                                        } 
                                    })}
                                    defaultValue={typeof paoDeMel.ingredientes.acucar === 'number' ? `${parseFloat(paoDeMel.ingredientes.acucar).toFixed(2)}` : ""}
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
                                    defaultValue={typeof paoDeMel.ingredientes.farinhaDeTrigo === 'number' ? `${parseFloat(paoDeMel.ingredientes.farinhaDeTrigo).toFixed(2)}` : ""}
                                />
                                {errors.farinhaDeTrigo && <span>{errors.farinhaDeTrigo.message}</span>}
                            </InputGroup>
                        </Form.Group>

                        <Form.Group>
                            <InputGroup>
                                <Form.Label>Essência de baunilha:</Form.Label>
                                <Form.Control
                                    {...register("baunilha", { 
                                        required: true,
                                        pattern: {
                                            value: /^\d+(\.\d{1,2})?$/,
                                            message: "Insira um valor válido com no máximo duas casas decimais."
                                        } 
                                    })}
                                    defaultValue={typeof paoDeMel.ingredientes.baunilha === 'number' ? `${parseFloat(paoDeMel.ingredientes.baunilha).toFixed(2)}` : ""}
                                />
                                {errors.baunilha && <span>{errors.baunilha.message}</span>}
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
                                    defaultValue={typeof paoDeMel.ingredientes.ovos === 'number' ? `${parseFloat(paoDeMel.ingredientes.ovos).toFixed(2)}` : ""}
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