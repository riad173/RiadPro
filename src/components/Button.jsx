const Button = ({name, isBeam = false, containerClass, url}) => {
  return (
    <button className={`btn ${containerClass}`}>
        {isBeam && (
            <span className="relative flex h-2 w-3">
                <span className="btn-ping"/>
                <span className="btn-ping_dot"/>
                
            </span>
        )}
        {name}
    </button>
  )
}

export default Button