

const Button = (props) => {
  return (
    <button className={props.classesName}>
        {props.icon}
        {props.text}
    </button>
  )
}

export default Button