import React, {useCallback, useRef, useState} from 'react';
import Container from "../container";
import SectionHeader from "../section-header";
import BGPortfolio from "./bg-contact";
import Space from "../space";
import TextInput from "./text-input";
import Button from "../button";
import {isValidEmail} from "../../utils";
import {createNewContact} from "../../services/contact.service";
import ContactModel from "../../models/contact.model";
import InfoModal, {InfoModalRef} from "../modals/info.modal";

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
    const infoRef = useRef<InfoModalRef>(null)
    const [data, setData] = useState<FormDataType>({
        name: DEFAULT_VALUE,
        email: DEFAULT_VALUE,
        subject: DEFAULT_VALUE,
        content: DEFAULT_VALUE
    })
    const [loading, setLoading] = useState(false)

    /**
     * Trigger changing in form content.
     */
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

    /**
     * Function to check if the content form is right or not.
     */
    const validate = useCallback(
        () => {
            let valid = true
            const name = data.name.value.trim()
            const email = data.email.value.trim()
            const subject = data.subject.value.trim()
            const content = data.content.value.trim()

            // Check the name
            if (name === "") {
                valid = false
                setData(state => ({
                    ...state,
                    name: {
                        value: name,
                        error: true,
                        helperText: "Veuillez renseigner votre nom."
                    }
                }))
            }

            // Check the email address
            if (email === "") {
                valid = false
                setData(state => ({
                    ...state,
                    email: {
                        value: email,
                        error: true,
                        helperText: "Veuillez renseigner votre adresse e-mail."
                    }
                }))
            } else if (!isValidEmail(email)) {
                valid = false
                setData(state => ({
                    ...state,
                    email: {
                        value: email,
                        error: true,
                        helperText: "Votre adresse e-mail n'est pas valide."
                    }
                }))
            }

            // Check the subject
            if (subject === "") {
                valid = false
                setData(state => ({
                    ...state,
                    subject: {
                        value: subject,
                        error: true,
                        helperText: "Veuillez renseigner un object."
                    }
                }))
            }

            // Check the content
            if (content === "") {
                valid = false
                setData(state => ({
                    ...state,
                    content: {
                        value: content,
                        error: true,
                        helperText: "Veuillez renseigner un contenue."
                    }
                }))
            }

            return valid
        },
        [data, setData]
    )

    /**
     * Function to open info modal.
     */
    const openModal = useCallback(
        (type: "error" | "success", message: string) => {
            if (infoRef.current)
                infoRef.current.open(type, message)
        },
        [infoRef]
    )

    /**
     * Function to submit the form content.
     */
    const submitHandler: React.FormEventHandler<HTMLFormElement> = useCallback(
        async (e) => {
            e.preventDefault()

            if (!validate())
                return

            const formData: ContactModel = {
                id: "",
                name: data.name.value.trim(),
                email: data.email.value.trim(),
                subject: data.subject.value.trim(),
                content: data.content.value.trim(),
                date: new Date()
            }
            setLoading(true)
            try {
                setLoading(false)
                await createNewContact(formData)
                openModal(
                    "success",
                    "Votre message à bien été transmis et enregistré, merci d'avoir émit cette action."
                )
            } catch (e) {
                setLoading(false)
                console.log(e)
                openModal(
                    "error",
                    "Une erreur est survenue, veuillez réessayer !"
                )
            }
        },
        [data, validate, openModal]
    )

    return (
        <>
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
                                Vous avez besoin d’une application mobile ou web qui vous permettra de faire augmenter
                                votre
                                chiffre d’affaire ?
                            </p>
                            <Space height={15}/>
                            <p className={"text-sm md:text-base text-gray-400"}>
                                Vous avez besoin d’un renfort pour le développement de votre projet ?
                            </p>
                            <Space height={15}/>
                            <p className={"text-sm md:text-base text-gray-400"}>
                                Vous travaillez sur un projet digital et vous avez besoin d’un conseil ou tout autre
                                service
                                pour menez à bien votre projet ?
                            </p>
                            <Space height={15}/>
                            <p className={"text-sm md:text-base text-gray-400"}>
                                Veuillez me contacter via me contacter via ce formulaire ou me contacter directement via
                                mes
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
                                    <Button loading={loading} title={loading ? '...' : "Envoyer"}/>
                                </div>
                            </form>
                        </div>
                    </div>
                </Container>
            </section>
            <InfoModal ref={infoRef}/>
        </>
    );
};

export default Contact
