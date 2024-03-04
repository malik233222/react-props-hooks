
export default function Buttons({title,mode}) {
    return (
        <div>
            <button className={mode} >{title}</button>
        </div>
    )
}
