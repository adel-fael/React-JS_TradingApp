import { createContext, useEffect, useState } from "react"

export const WatchListContext = createContext()

export const WatchListContextProvider = (props) => {
  /* Setting the initial state of the watchList to the value of the localStorage item "watchList" if it
exists, otherwise it is setting the initial state to ["GOOGL", "MSFT", "AMZN"] */
  const [watchList, setWatchList] = useState(
    localStorage.getItem("watchList")?.split(",") || ["GOOGL", "MSFT", "AMZN"]
  )

  useEffect(() => {
    localStorage.setItem("watchList", watchList)
  }, [watchList])

  const addStock = (stock) => {
    if (watchList.indexOf(stock) === -1) {
      setWatchList([...watchList, stock])
    }
  }

  const deleteStock = (stock) => {
    setWatchList(
      watchList.filter((el) => {
        return el !== stock
      })
    )
  }

  return (
    <WatchListContext.Provider value={{ watchList, addStock, deleteStock }}>
      {props.children}
    </WatchListContext.Provider>
  )
}
