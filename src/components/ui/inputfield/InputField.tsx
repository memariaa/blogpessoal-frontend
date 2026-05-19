import { forwardRef, type ChangeEvent } from "react"

interface InputFieldProps  { 
    textarea?: boolean;
    label?: string;
    type?: string;
    name: string;
    id: string;
    placeholder?: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const InputField = forwardRef<
    HTMLInputElement | HTMLTextAreaElement, 
    InputFieldProps
>(function InputField({textarea, label, type = "text", name, id, placeholder, value, onChange}, ref) {
    return (
        <div className="flex flex-col gap-2">
            {label && (
                <label htmlFor={id} className="text-xl md:text-2xl font-medium">
                    {label}
                </label>
            )}

            {textarea ? (
                <textarea 
                    ref={ref as React.Ref<HTMLTextAreaElement>} 
                    name={name} 
                    id={id} 
                    placeholder={placeholder} 
                    value={value}
                    rows={5} className="w-full py-2 px-3 bg-beige rounded-3xl text-sm border border-black/50 placeholder:text-black/50 outline-none transition-all hover:border-black focus:border-black hover:shadow-sm"/>
            ) : (
                <input ref={ref as React.Ref<HTMLInputElement>} 
                    type={type} 
                    name={name} 
                    id={id} 
                    placeholder={placeholder} 
                    value={value}
                    onChange={onChange}
                    className="w-full py-2 px-3 bg-beige rounded-full text-sm border border-black/50 placeholder:text-black/50 outline-none transition-all hover:border-black focus:border-black hover:shadow-sm"
                />
            )}
        </div>
    )
})