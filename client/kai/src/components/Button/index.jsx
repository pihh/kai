export const Button = (props = {}) => {
    return (
        <div className="module-border-wrap rounded-md" onClick={props.onClick}><div className='bg-white rounded-sm'>
            <div className="module text-sm/6 font-semibold    px-2 py-1 text-sm">
                {props.title}</div></div>
        </div>
    )
}