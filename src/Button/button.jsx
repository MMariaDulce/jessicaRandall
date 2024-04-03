    const Button = ({text, source}) => {
        return(
            <a href={source}>
                <input type="button" value={text} />
                </a>
        )
    }

    export default Button