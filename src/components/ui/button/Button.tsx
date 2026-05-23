import { Link } from "react-router-dom";

interface ButtonProps {
  buttonType: 'form' | 'link';
  text?: string;
  link?: string;
  icon?: string;
  children?: React.ReactNode;
  variant: 'blue' | 'red' | 'beige';
  fitWidth?: boolean;
  onClick?: () => void;
} 

function Button({ buttonType, text, link, icon, children, variant, fitWidth, onClick }: ButtonProps) {

    const colorVariants ={
        blue: 'bg-blue text-black',
        red: 'bg-red text-beige',
        beige: 'bg-beige text-black',
    }

    return (
        <> 
            {buttonType ==='form'? (
                <button type="submit" className={`text-[1.125rem] md:text-xl font-semibold md:font-normal border border-black rounded-full shadow-sm ${fitWidth ? "w-fit" : "w-full"} py-2 px-3 cursor-pointer ${colorVariants[variant]}`}>
                    {children || text}
                </button>

            ) : (
                <Link to={link!} onClick={onClick} className={`flex flex-row gap-2.5 items-center justify-center text-[1.125rem] md:text-xl font-semibold md:font-normal border border-black rounded-full shadow-sm ${fitWidth ? "w-fit" : "w-full"} py-2 px-3 ${colorVariants[variant]}`}>
                    {icon && <img src={icon} alt={text} className="w-5 h-5 shrink-0" />} <span className={icon ? "hidden md:inline" : ""}>{children || text}</span>
                </Link>

            )}
        </>
    )
}

export default Button