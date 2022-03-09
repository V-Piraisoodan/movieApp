// console.log(event.target.value)
export function Addcolorbox({ clr }) {
  const styles = {
    backgroundColor: clr,
    height: "50px",
    width: "200px",
    margin: "10px 0px",
  };
  return (
    <div style={styles}></div>
  );
}
