import React, {useCallback} from 'react';
import {FormDataKey, FormType} from "./index";

type TextInputProps = {
    label: string
    name: FormDataKey
    value: FormType
    type?: string
    rows?: number
    onValueChange?: (val: string, name: FormDataKey) => void
};

const TextInput = (props: TextInputProps) => {
    const {
        label,
        name,
        value,
        type = "text",
        rows,
        onValueChange
    } = props

    const changeHandler: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = useCallback(
        (e) => {
            if (onValueChange)
                onValueChange(e.target.value, name)
        },
        [name, onValueChange]
    )

    return (
        <div className={"flex flex-col gap-1"}>
            <label className={"text-gray-400/80 text-sm md:text-base"}>
                {label}
            </label>
            <div className={"text-input-container"}>
                {rows ? (
                    <textarea
                        onChange={changeHandler}
                        value={value.value}
                        id={name}
                        rows={rows}
                        className={"input-text"}
                    ></textarea>
                ) : (
                    <input
                        onChange={changeHandler}
                        value={value.value}
                        id={name}
                        type={type}
                        className={"input-text"}
                    />
                )}
            </div>
            {value.error ? (
                <small className={"text-red-400 text-xs"}>
                    {value.helperText}
                </small>
            ) : null}
        </div>
    );
};

export default TextInput
