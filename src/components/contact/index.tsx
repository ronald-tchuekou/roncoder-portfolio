import React, {useCallback, useState} from 'react';
import Container from "../container";
import SectionHeader from "../section-header";
import BGPortfolio from "./bg-contact";
import Space from "../space";
import TextInput from "./text-input";
import Button from "../button";

export type FormType = {
    value: string
    error: boolean
    helperText: string
}

type FormDataType = {
    name: FormType
    email: FormType
    subject: FormType
    content: FormType
}

export type FormDataKey = keyof FormDataType

const DEFAULT_VALUE: FormType = {
    value: "",
    error: false,
    helperText: ""
}

const Contact = () => {
    const [data, setData] = useState<FormDataType>({
        name: DEFAULT_VALUE,
        email: DEFAULT_VALUE,
        subject: DEFAULT_VALUE,
        content: DEFAULT_VALUE
    })

    const changeHandler = useCallback(
        (value: string, key: FormDataKey) => {
            setData(state => ({
                ...state,
                [key]: {
                    value,
                    error: false,
                    helperText: ""
                }
            }))
        },
        [setData]
    )

    const submitHandler: React.FormEventHandler<HTMLFormElement> = useCallback(
        (e) => {
            e.preventDefault()
            console.log(data)
        },
        [data]
    )

    return (
        <section
            id={"contact"}
            className={"relative w-full py-10 md:py-20"}>
            <BGPortfolio/>
            <Container>
                <div className={"w-full"}>
                    <SectionHeader label={"Me contacter"}/>
                    <Space/>
                    <div className={"w-full max-w-[800px] m-auto"}>
                        <p className={"text-sm md:text-base text-gray-400"}>
                            Vous avez besoin d’une application mobile ou web qui vous permettra de faire augmenter votre
                            chiffre d’affaire ?
                        </p>
                        <Space height={15}/>
                        <p className={"text-sm md:text-base text-gray-400"}>
                            Vous avez besoin d’un renfort pour le développement de votre projet ?
                        </p>
                        <Space height={15}/>
                        <p className={"text-sm md:text-base text-gray-400"}>
                            Vous travaillez sur un projet digital et vous avez besoin d’un conseil ou tout autre service
                            pour menez à bien votre projet ?
                        </p>
                        <Space height={15}/>
                        <p className={"text-sm md:text-base text-gray-400"}>
                            Veuillez me contacter via me contacter via ce formulaire ou me contacter directement via mes
                            contacts qui se trouvent plus bas.
                        </p>
                        <Space height={30}/>
                        <form
                            onSubmit={submitHandler}
                            className={"grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8"}>
                            <div className={""}>
                                <TextInput
                                    onValueChange={changeHandler}
                                    name={"name"}
                                    value={data.name}
                                    label={"Nom :"}/>
                            </div>
                            <div className={""}>
                                <TextInput
                                    onValueChange={changeHandler}
                                    name={"email"}
                                    value={data.email}
                                    label={"Adresse e-mail :"}/>
                            </div>
                            <div className={"md:col-span-2"}>
                                <TextInput
                                    onValueChange={changeHandler}
                                    name={"subject"}
                                    value={data.subject}
                                    label={"Objet :"}/>
                            </div>
                            <div className={"md:col-span-2"}>
                                <TextInput
                                    onValueChange={changeHandler}
                                    name={"content"}
                                    value={data.content}
                                    rows={5}
                                    label={"Entrer la description de votre besoin :"}/>
                            </div>
                            <div className={"md:col-span-2"}>
                                <Button title={"Envoyer"}/>
                            </div>
                        </form>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Contact
