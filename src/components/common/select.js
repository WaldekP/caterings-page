import React, { useState, useEffect } from "react"
import Downshift from "downshift"
import selectStyles from "../../styles/select.module.scss"

export const Select = (
  {
    items,
    placeholder,
    selectedItem,
    selectedItemKey,
    selectItem,
  }
) => {
  useEffect(() => {
    const item = items[0]
    selectItem(item)
  }, [])
  return (
    <Downshift
      itemToString={item => (item ? item[selectedItemKey] : "")}
      onChange={item => selectItem(item)}
      selectedItem={selectedItem}
    >
      {({
        getItemProps,
        getToggleButtonProps,
        highlightedIndex,
        isOpen,
      }) => (
        <div className={selectStyles.container}>
          <div
            className={selectStyles.dropdownButton}
            {...getToggleButtonProps()}
          >
            <span>
              {(() => {
                if (Object.keys(selectedItem).length > 0) {
                  return selectedItem[selectedItemKey]
                }
                return "Wybierz..."
              })()}
            </span>
          </div>
          <div className={selectStyles.itemsWrapper}>
            {isOpen ? (
              <div className={selectStyles.downshiftDropdown}>
                {items.map((item, index) => (
                  <div
                    className={selectStyles.dropdownItem}
                    {...getItemProps({ key: index, index, item })}
                    style={{
                      backgroundColor:
                        highlightedIndex === index ? "#8186C0" : "#E7E7F3",
                        color:
                        highlightedIndex === index ? "white" : "#102682",
                    }}
                  >
                    <span>{item[selectedItemKey]}</span>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      )}
    </Downshift>
  )
}
