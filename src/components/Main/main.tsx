import styles from "./main.module.scss";
import discover from "../../assets/icons/discover.svg";
import dot from "../../assets/icons/dot.svg";
import paypal from "../../assets/icons/paypal.svg";
import visa from "../../assets/icons/visa.svg";
import card from "../../assets/images/Card.png";
import { Button } from "../Button";

const Main = () => {
  return (
    <div className={styles.container}>
      <hr />
      <div className={styles.hero_section}>
        <div className={styles.header}>
          <h3>Payment Information</h3>
          <p>Choose your method of payment</p>
          <img className={styles.card} src={card} alt="" />
        </div>
        <div>
          <div className={styles.icons}>
            <img src={visa} alt="" />
            <img src={discover} alt="" />
            <img className={styles.dot} src={dot} alt="" />
            <img src={paypal} alt="" />
          </div>

          <form action="">
            <div className={styles.form_wrapper}>
              <div className={styles.form_content}>
                <div className={styles.form_group}>
                  <label htmlFor="">Credit card number</label>
                  <input className={styles.form_input} type="text" />
                </div>
                <div className={`${styles.form_group} ${styles.form_group_2}`}>
                  <label htmlFor="">Expiration Date</label>
                  <input className={styles.form_input} type="text" />
                </div>
              </div>
              <div className={styles.form_content}>
                <div className={styles.form_group}>
                  <label htmlFor="">Security Code</label>
                  <input className={styles.form_input} type="text" />
                </div>
                <div className={`${styles.form_group} ${styles.form_group_2}`}>
                  <label htmlFor="">Postal Code</label>
                  <input className={styles.form_input} type="text" />
                </div>
              </div>
              <div className={styles.radio_input}>
                <input type="radio" name="" value="" />
                <label>Use this card for the next time purchase</label>
              </div>
              <Button>Add Card</Button>
            </div>
          </form>
        </div>
      </div>
      <hr />
      <div className={styles.price_summary}>
        <div>
          <h5>Subtotal</h5>
          <h5>Estimated TAX</h5>
          <h5>
            Promotional Code: <span>Z4KXLM9A</span>
          </h5>
        </div>
        <div className={styles.price}>
          <h5>&#8358;2,497.00</h5>
          <h5>&#8358;119.64</h5>
          <h5>&#8358;-60.00</h5>
        </div>
      </div>
      <hr />
      <div className={styles.footer}>
        <Button style={{ width: "20%" }} variant="primary">
          Complete payment
        </Button>
        <h4>TOTAL: &#8358;2556.64</h4>
      </div>
    </div>
  );
};

export default Main;
