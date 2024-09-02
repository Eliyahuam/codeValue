import './style.css'

interface Props {
    onClick: () => void
    type:"delete" | "save" | "add"
}
export const CBtn = ({onClick,type}:Props) => {
    return <div onClick={onClick} className={ `btn-container ${type}`}>
    {type === "add" ? "+" : ""}    {type}
    </div>
 
}