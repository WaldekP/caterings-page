import React, { useEffect, useReducer } from "react"
import pricingStyles from "../styles/pricing.module.scss"
import cateringDetails from "../data/companyDetails/cateringDetails"
import * as lodzMeals from "../data/companyDetails/citiesPricing/lodzPricing"
import * as restCitiesMealsMeals from '../data/companyDetails/citiesPricing/restCitiesPricing'
import * as warsawMeals from '../data/companyDetails/citiesPricing/warsawPricing'
const { default: mealsPricingRestCities } = restCitiesMealsMeals
const { default: mealsPricingLodz } = lodzMeals
const { default: mealsPricingWarsaw } = warsawMeals

const Pricing = React.forwardRef((props, ref) => {
  const discounts = [
    { minimumDays: 14, discount: 5, discountType: "PERCENTAGE" },
    { minimumDays: 30, discount: 10, discountType: "PERCENTAGE" },
  ]
  const initialState = {
    activeDiet: "",
    activeOption: "",
    activeCalories: "",
    activeMeals: "",
    days: 10,
    mealsValidation: "",
  }
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "STORE_DIET":
        return {
          ...state,
          activeDiet: action.activeDiet,
        }
      case "STORE_OPTION":
        return {
          ...state,
          activeOption: action.activeOption,
        }
      case "STORE_CALORIES":
        return {
          ...state,
          activeCalories: action.activeCalories,
        }
      case "CHANGE_DAYS":
        return {
          ...state,
          days: action.days > 0 ? action.days : "",
        }
      case "CHANGE_DAY":
        return {
          ...state,
          days:
            action.changeType === "plus"
              ? parseInt(state.days + 1)
              : state.days - 1,
        }
      case "STORE_MEALS":
        return {
          ...state,
          activeMeals: {
            ...action.activeMeals,
            dietCaloriesMeals: action.activeMeals.dietCaloriesMeals.map(
              meal => ({
                ...meal,
                selected: true,
              })
            ),
          },
        }
      case "DISPLAY_VALIDATION":
        return {
          ...state,
          mealsValidation: "Minimalna liczba posiłków to 3",
        }
      case "RESET_VALIDATION":
        return {
          ...state,
          mealsValidation: "",
        }
      case "TOGGLE_MEAL": {
        const numberOfMealsSelected = state.activeMeals.dietCaloriesMeals.filter(
          meal => meal.selected
        ).length
        return {
          ...state,
          activeMeals: {
            ...state.activeMeals,
            dietCaloriesMeals: state.activeMeals.dietCaloriesMeals.map(meal => {
              if (action.meal === meal.dietCaloriesMealId) {
                if (meal.selected && numberOfMealsSelected > 3) {
                  return {
                    ...meal,
                    selected: false,
                  }
                }
                if (!meal.selected) {
                  return {
                    ...meal,
                    selected: true,
                  }
                }
              }
              return meal
            }),
          },
        }
      }

      default:
        return state
    }
  }, initialState)
  useEffect(() => {
    dispatch({ type: "STORE_DIET", activeDiet: getDiets()[0] })
  }, [])
  useEffect(() => {
    state.activeDiet &&
      dispatch({ type: "STORE_OPTION", activeOption: getDietOptions()[0] })
  }, [state.activeDiet])
  useEffect(() => {
    state.activeOption &&
      dispatch({
        type: "STORE_CALORIES",
        activeCalories: getDietOptionCalories()[0],
      })
  }, [state.activeOption])
  useEffect(() => {
    state.activeCalories &&
      dispatch({
        type: "STORE_MEALS",
        activeMeals: handleCityMeals()[state.activeCalories.dietCaloriesId],
      })
  }, [state.activeCalories])

  const getDiets = () => {
    return cateringDetails.diets
      .reduce((acc, curr) => {
        const dietAlreadyExists = acc.findIndex(
          diet => diet.dietId === curr.dietId
        )
        if (dietAlreadyExists === -1) {
          if (handleDietPageDietId()) {
            handleDietPageDietId() === curr.dietId && acc.push({
              diet: curr.dietName,
              dietId: curr.dietId,
            })
          } else {
            acc.push({
              diet: curr.dietName,
              dietId: curr.dietId,
            })
          }
        }
        return acc
      }, [])
      .sort((prev, next) => prev.diet.localeCompare(next.diet))
  }

  const getDietOptions = () => {
    const { activeDiet } = state
    const selectedDiet = activeDiet.dietId
    const filteredDiet = cateringDetails.diets.filter(
      diet => diet.dietId === selectedDiet
    )
    return (
      filteredDiet &&
      filteredDiet
        .reduce((acc, curr) => {
          const optionAlreadyExists = acc.findIndex(
            option => option.optionId === curr.dietOptionId
          )
          if (optionAlreadyExists === -1) {
            acc.push({
              option: curr.dietOptionName,
              optionId: curr.dietOptionId,
            })
          }
          return acc
        }, [])
        .sort((prev, next) => prev.option.localeCompare(next.option))
    )
  }

  const getDietOptionCalories = () => {
    const { activeOption } = state
    const selectedOption = activeOption.optionId
    const filteredDietOption = cateringDetails.diets.filter(
      diet => diet.dietOptionId === selectedOption
    )

    return (
      filteredDietOption &&
      filteredDietOption
        .reduce((acc, curr) => {
          const caloriesAlreadyExists = acc.findIndex(
            dietOption => dietOption.calories === curr.calories
          )

          if (caloriesAlreadyExists === -1) {
            acc.push({
              calories: curr.calories,
              dietCaloriesId: curr.dietCaloriesId,
            })
          }
          return acc
        }, [])
        .sort((prev, next) => prev.calories - next.calories)
    )
  }

  const getDiscountDetails = () => {
    const { days } = state
    if (!(days && discounts)) {
      return null
    }
    if (days === 0) {
      return null
    }
    const closestDiscount = discounts.reduce(
      (acc, curr) => {
        const accMinusDays = acc.minimumDays - days
        const currMinusDay = curr && curr.minimumDays - days
        if (accMinusDays <= 0) {
          return curr
        }
        if (currMinusDay <= 0) {
          return acc
        }
        if (accMinusDays < currMinusDay) {
          return acc
        }
        return curr
      },
      { minimumDays: 0, discount: 0, discountType: "PERCENTAGE" }
    )
    return {
      ...closestDiscount,
      barPercentage: (days * 100) / closestDiscount.minimumDays,
      daysTillDiscount: closestDiscount && closestDiscount.minimumDays - days,
    }
  }

  const calculateNumberOfSelectedMeals = () => {
    return (
      state.activeMeals &&
      state.activeMeals.dietCaloriesMeals.filter(meal => meal.selected).length
    )
  }

  const displayValidation = () => {
    dispatch({
      type: "DISPLAY_VALIDATION",
    })
    setTimeout(() => {
      dispatch({ type: "RESET_VALIDATION" })
    }, 1500)
  }

  const calculatePrice = () => {
    const { activeMeals, days } = state
    const price = activeMeals && activeMeals.sectorPriceSettings[0].fullPrice + 2;
    const deductedPrice = parseFloat(price - calculatePriceOfUnCheckedMeals())
    if (days > 13 && days < 30) {
      return (deductedPrice * 0.95).toFixed(1)
    }
    if (days >= 30) {
      return (deductedPrice * 0.9).toFixed(1)
    }
    return deductedPrice.toFixed(1)
  }

  const handleDiscount = () => {
    const { days } = state

    if (days > 13 && days < 30) {
      return "5%"
    }
    if (days >= 30) {
      return "10%"
    }
  }

  const calculatePriceOfUnCheckedMeals = () => {
    const { activeMeals } = state
    return (
      activeMeals &&
      activeMeals.dietCaloriesMeals.reduce((acc, curr) => {
        if (!curr.selected) {
          acc = acc + curr.dietPrices[0].deductionPrice
        }
        return acc
      }, 0)
    )
  }

  const handleCityMeals = () => {
    const { pageContext: { city} } = props
    if (!city) {
      return mealsPricingRestCities
    }
    if (city === 'warszawa') {
      return mealsPricingWarsaw
    }
    return mealsPricingLodz
  }

  const handleDietPageDietId = () => {
    const { pageContext: { diet} } = props
    if (diet === 'dieta-odchudzajaca') {
      return 124
    }
    if (diet === 'dieta-paleo') {
      return 114
    }
    if (diet === 'dieta-samuraja') {
      return 134
    }
    if (diet === 'dieta-sportowa-na-mase') {
      return 94
    }
    if (diet === 'dieta-sportowa-na-redukcje') {
      return 104
    }
    if (diet === 'dieta-standard') {
      return 578
    }
    if (diet === 'dieta-weganska') {
      return 577
    }
    if (diet === 'dieta-wegetarianska') {
      return 576
    }
    if (diet === 'dieta-bezglutenowa') {
      return 582
    }
    if (diet === 'dieta-bezlaktozowa') {
      return 581
    }
    if (diet === 'dieta-detox') {
      return 580
    }
    if (diet === 'dieta-niski-indeks') {
      return 579
    }
    if (diet === 'dieta-wege-z-rybami') {
      return 234
    }
    return null
  }

  const { diet } = props;
  return (
    <div ref={ref}>
      <h2>{ diet ? `Cennik cateringu Afterfit - ${diet}` : "Cennik naszych diet pudełkowych"}</h2>
      <div className={pricingStyles.container}>
        <div className={pricingStyles.leftSide}>
          <div className={pricingStyles.leftSideWrapper}>
            {!handleDietPageDietId() && <div className={pricingStyles.section}>
              <p>Dieta</p>
              {getDiets().map(dietItem => (
                <div
                  onClick={() =>
                    dispatch({ type: "STORE_DIET", activeDiet: dietItem })
                  }
                  key={dietItem.dietId}
                  className={
                    dietItem.dietId === state.activeDiet.dietId
                      ? pricingStyles.activeItem
                      : pricingStyles.item
                  }
                >
                  {dietItem.diet}
                </div>
              ))}
            </div>}
            <div className={pricingStyles.section}>
              <p>Kaloryczność</p>
              {getDietOptionCalories().map(item => (
                <div
                  onClick={() =>
                    dispatch({
                      type: "STORE_CALORIES",
                      activeCalories: item,
                    })
                  }
                  key={item.dietCaloriesId}
                  className={
                    item.dietCaloriesId === state.activeCalories.dietCaloriesId
                      ? pricingStyles.activeItem
                      : pricingStyles.item
                  }
                >
                  {item.calories} kcal
                </div>
              ))}
            </div>
            <div className={pricingStyles.section}>
              <p>
                Posiłki{" "}
                {state.mealsValidation && "(Minimalna licza posiłków to 3)"}
              </p>
              {state.activeMeals &&
                state.activeMeals.dietCaloriesMeals.sort((prev, next) => {
                  const prevMeal = prev.dietMeal.priority
                  const nextMeal = next.dietMeal.priority
                  return prevMeal - nextMeal
                }).map(meal => (
                  <div
                    key={meal.dietMeal.meal.name}
                    onClick={() => {
                      calculateNumberOfSelectedMeals() === 3 &&
                        meal.selected &&
                        displayValidation()
                      calculateNumberOfSelectedMeals() === 3 &&
                        !meal.selected &&
                        dispatch({ type: "RESET_VALIDATION" })
                      dispatch({
                        type: "TOGGLE_MEAL",
                        meal: meal.dietCaloriesMealId,
                      })
                    }}
                    className={pricingStyles.mealItem}
                    style={
                      meal.selected
                        ? null
                        : { backgroundColor: "#E7E7F3", color: "#102682" }
                    }
                  >
                    {meal.dietMeal.meal.name}
                  </div>
                ))}
            </div>
            <div className={pricingStyles.daysSection}>
              <p>Okres zamówienia</p>
              <div
                className={pricingStyles.dayButton}
                onClick={() =>
                  state.days > 1 &&
                  dispatch({ type: "CHANGE_DAY", changeType: "minus" })
                }
              >
                -
              </div>
              <div className={pricingStyles.dayInput}>
                <input
                  onChange={({ target: { value } }) =>
                    dispatch({ type: "CHANGE_DAYS", days: parseInt(value) })
                  }
                  value={state.days}
                  type="number"
                />
                dni
              </div>
              <div
                className={pricingStyles.dayButton}
                onClick={() =>
                  dispatch({ type: "CHANGE_DAY", changeType: "plus" })
                }
              >
                +
              </div>
            </div>
            <div className={pricingStyles.barSection}>
              {state.days > 0 && getDiscountDetails().minimumDays > state.days && (
                <div>
                  <p>
                    Dodaj {getDiscountDetails().daysTillDiscount} dni, aby
                    uzyskać {getDiscountDetails().discount }% rabatu
                  </p>
                </div>
              )}
              {state.days > 0 && getDiscountDetails().minimumDays > state.days && (
                <div className={pricingStyles.barItem}>
                  <div
                    style={{
                      width: `${(getDiscountDetails().barPercentage)}%`,
                    }}
                  />
                </div>
              )}
             <div>
                <p style={!handleDiscount() ? {visibility: "hidden"} : null}>RABAT: {handleDiscount()}</p>
              </div>
            </div>
          </div>
        </div>
        <div className={pricingStyles.rightSide}>
          <div className={pricingStyles.rightSideWrapper}>
            <p>CENA DIETY</p>
            <h2>{state.days > 0 ? calculatePrice(): "0"} PLN / DZIEŃ</h2>
            <p className={pricingStyles.priceSummary}>
              {`RAZEM: ${state.days > 0 ?
                (calculatePrice() * state.days).toFixed(1) : "0"} PLN za ${
                state.days
              } dni`}
            </p>
            <a
              href="https://afterfit-catering.pl/zamowienie"
              target="_blank"
              rel="noopener"
            >
              <button>Zamów</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
})

export default Pricing
