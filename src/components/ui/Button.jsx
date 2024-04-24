import styles from "./Button.module.css";

function Button({ children, type = "button", onClick, btnWidth }) {
  return (
    <div
      style={{
        width: btnWidth,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <button className={styles.btn} type={type} onClick={onClick}>
        {children}
      </button>
    </div>
  );
}

export default Button;
