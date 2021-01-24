export default function CharComponent(props) {
  const style = {
    display: "inline-block",
    padding: "16px",
    textAlign: "centre",
    margin: "16px",
    border: "1px solid black",
  };
  return (
    <div style={style}>
      <p onClick={props.click}>{props.charValue}</p>
    </div>
  );
}
