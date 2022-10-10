import React, { useState, useContext, useEffect } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
    const [products, setProducts] = useState([])
    
    const fetchProducts = async () => {
        const {data} = await commerce.products.list();
        setProducts(data)
        console.log(products)
        console.log('products')
        console.log('helooooo')
    }
    useEffect(() => {
        fetchProducts()
    }, [])
    console.log('helooooo')

  
  return <AppContext.Provider value={{loading,cocktails,setSearchTerm}}>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }