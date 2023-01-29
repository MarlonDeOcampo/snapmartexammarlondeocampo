import { useEffect, useRef, useState } from "react";
import DropDown from "../svg/dropdown.icon";

type Props = {
    classes?: string,
    label?: string,
    defaultValue?: number,
    options: any[],
    disabled?: boolean;
    setValue: (val: string) => void;
    value: string;
};

const SelectField: React.FC<Props> = ({ classes, label, options, disabled, setValue, value }: Props) => {
    const [isOption, setIsOption] = useState<boolean>(false);

    const optionRef = useRef<HTMLInputElement>(null);


    useEffect(() => {
        let handleMenu = (e: any) => {
            if (optionRef.current !== null) {
                if (!optionRef.current.contains(e.target)) {
                    setTimeout(() => {
                        setIsOption(false);
                    }, 150);
                }
            }
        };
        document.addEventListener("mousedown", handleMenu);
        return () => {
            document.removeEventListener("mousedown", handleMenu);
        };
    }, []);


    return (
        <div className="relative flex text-white text-sm">
            {label != null ? <div className="text-sm h-6 w-20 text-dark h-6 flex justify-center items-center">{label}</div> : null}
            <div className={`${classes}`}>
                <div className="text-dark">{value}</div>
                <div
                    className={`absolute top-2 right-1 w-[24px] h-[24px] ${disabled ? "" : 'cursor-pointer'}`}
                    onClick={() => !disabled ? setIsOption((prev) => !prev) : null}
                >
                    <div className="flex justify-center items-center">
                        <DropDown width="10px" height="10px" color="#000000" />
                    </div>
                </div>
            </div>
            {isOption ?
                <div className="z-50 flex flex-col text-sm bg-secondary shadow-lg absolute w-[10rem] top-9 left-20" ref={optionRef}>
                    {options.map((option, index) => (
                        <button
                            key={index}
                            className="text-start pl-4 text-dark hover:bg-primary hover:text-white py-1"
                            onClick={() => {
                                setValue(option.name);
                                setIsOption(false);
                            }}
                        >
                            {option?.name}
                        </button>
                    ))}
                </div>
                : null}
        </div>
    );
};

export default SelectField;                                                                                                                                                                                    
