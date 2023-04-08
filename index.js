const Box = props => {
  const {className,text} = props;
  const containerClassName = {`boxes-container ${className}`};
  return(
      <div className = {containerClassName}>
          <p className ="message">{text}</p>
      </div>
  )
}

const element = (
    <div className = "bg-container">
        <h1 className="heading">Boxes</h1>
        <div className = "boxes-container">
            <Box
            className ="small-container"
            text = "Small"/>
            <Box
            className ="medium-container"
            text = "Medium"/>
            <Box
            className ="large-container"
            text = "Large"/>
        </div>
    </div>
)

ReactDOM.render(element, document.getElementById("root"));
