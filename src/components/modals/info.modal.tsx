import * as React from 'react';
import {ForwardedRef, forwardRef, useImperativeHandle, useState} from 'react';
import {ErrorSvg, SuccessSvg} from "../../assets/svg";

type InfoModalProps = {
    type?: "error" | "success"
    message?: string
};

export type InfoModalRef = {
    open: (type: "error" | "success", message: string) => void
}

const InfoModal = forwardRef((props: InfoModalProps, ref: ForwardedRef<InfoModalRef>) => {

    const [show, setShow] = useState(false)
    const [config, setConfig] = useState<InfoModalProps>({
        type: "success",
        message: ""
    })

    useImperativeHandle(ref, () => ({
        open(type, message) {
            setShow(true)
            setConfig({
                type,
                message
            })
        }
    }))

    if (!show)
        return null

    return (
        <div className={"fixed inset-0 flex justify-center items-center z-50 p-5 overflow-hidden"}>
            <div
                onClick={() => setShow(false)}
                className={"bg-black/40 absolute inset-0 -z-10"}></div>
            <div className={"modal-content z-10 rounded-3xl shadow-lg w-full max-w-[500px]"}>
                {config.type === "success" ?
                    <SuccessSvg className={"w-20 text-primary-light"}/> :
                    <ErrorSvg className={"w-20 text-red-400"}/>}
                <h1 className={`text-xl sm:text-2xl lg:text-3xl ${
                    config.type === "success" ? "text-primary-light" : "text-red-400"
                } font-bold text-center w-full`}>
                    {config.type === "success" ? "Succès" : "Erreur"}
                </h1>
                <p className={"text-lg text-gray-100 text-center w-3/4"}>
                    {config.message}
                </p>
            </div>
        </div>
    );
});

export default InfoModal
