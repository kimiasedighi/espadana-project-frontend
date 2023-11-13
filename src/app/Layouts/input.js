import "../Assets/CSS/input.css";

export default function Input(params) {
  return (
    <>
      <input
        type={params.type}
        placeholder={params.text}
        value={params.initText}
        className={"input " + params.border}
      />
    </>
  );
}
