import React, { useEffect } from "react"
import pricingStyles from "../styles/pricing.module.scss"

const Pricing = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className={pricingStyles.mainContainer}>
      <h2>Cennik naszych diet pudełkowych</h2>
      <div className={pricingStyles.container}>
        <div className={pricingStyles.leftSide}>
          <div className={pricingStyles.leftSideWrapper}>
            <div className={pricingStyles.section}>
              <p>Dieta</p>
              <div className={pricingStyles.item}>Dieta Paleo</div>
              <div className={pricingStyles.item}>Dieta Paleo</div>
              <div className={pricingStyles.item}>Dieta Paleo</div>
              <div className={pricingStyles.item}>Dieta Paleo</div>
              <div className={pricingStyles.item}>Dieta Paleo</div>
              <div className={pricingStyles.item}>Dieta Paleo</div>
              <div className={pricingStyles.item}>Dieta Paleo</div>
              <div className={pricingStyles.item}>Dieta Paleo</div>
            </div>
            <div className={pricingStyles.section}>
              <p>Kaloryczność</p>
              <div className={pricingStyles.item}>1200 kcal</div>
              <div className={pricingStyles.item}>1500 kcal</div>
              <div className={pricingStyles.item}>1800 kcal</div>
              <div className={pricingStyles.item}>2000 kcal</div>
              <div className={pricingStyles.item}>2500 kcal</div>
            </div>
            <div className={pricingStyles.section}>
              <p>Posiłki</p>
              <div className={pricingStyles.mealItem}>Śniadanie</div>
              <div className={pricingStyles.mealItem}>II Śniadanie</div>
              <div className={pricingStyles.mealItem}>Obiad</div>
              <div className={pricingStyles.mealItem}>Podwieczorek</div>
              <div className={pricingStyles.mealItem}>Kolacja</div>
            </div>
            <div className={pricingStyles.daysSection}>
              <p>Okres zamówienia</p>
              <div className={pricingStyles.dayButton}>-</div>
              <div className={pricingStyles.dayInput}>
                <span>2 </span>
                <input />
                dni
              </div>
              <div className={pricingStyles.dayButton}>+</div>
            </div>
            <div className={pricingStyles.barSection}>
              <div><p>Dodaj 2 dni, aby uzyskać 5% rabatu</p></div>
              <div className={pricingStyles.barItem}>
                <div style={{width: '200px'}}/>
              </div>
              <div><p>RABAT: 0</p></div>
            </div>
          </div>
        </div>
        <div className={pricingStyles.rightSide}>
          <div className={pricingStyles.rightSideWrapper}>
            <p>Cena diety</p>
            <p>Cena diety</p>
            <p>Cena diety</p>
            <p>Cena diety</p>
          </div>
        </div>
      </div>
    </div>
  )
})

export default Pricing
