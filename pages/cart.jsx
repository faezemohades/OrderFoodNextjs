 import styles from '../styles/Cart.module.css'
import Image from 'next/image';
function Cart() {
  return (
    <div className={styles.container}>
      
      <div className={styles.left}>
      
      <div className={styles.table}>
          <div  className={styles.trTitle}
            >
            <div class="col">Product</div>
            <div class="col">Name</div>
            <div class="col">Extras</div>
            <div class="col">Price</div>
            <div class="col">Quantity</div>
            <div class="col">Total</div>
          </div>
          <div  className={styles.tr}
        >
            <div class="col" >
              <div className={styles.imgContainer}>
                <Image
                  src="/img/pizza.png"
                  layout="fill"
                  objectFit="cover"
                  alt=""
                />
              </div>
            </div>
            <div class="col"  >
              <span className={styles.name}>CORALZO</span>
            </div>
            <div class="col" >
              <span className={styles.extras}>
                Double ingredient,
                 spicy sauce
              </span>
            </div>
            <div class="col">
              <span className={styles.price}>$19.90</span>
            </div>
            <div class="col">
              <span className={styles.quantity}>2</span>
            </div>
            <div class="col">
              <span className={styles.total}>$39.80</span>
            </div>
          </div>
         
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>CART TOTAL</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal:</b>$79.60
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount:</b>$0.00
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b>$79.60
          </div>
          <button className={styles.button}>CHECKOUT NOW!</button>
        </div>
      </div>
    </div>
    
   

   )
}

export default Cart;
