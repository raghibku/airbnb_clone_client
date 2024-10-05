// context/PropertyContext.tsx
'use client'
import React, { createContext, useReducer, useContext, useEffect } from "react";
import axios from "axios";
import { useBooking } from "./BookingContext"; // Import BookingContext

// Initial state for PropertyContext
const initialState = {
  properties: [],
  loading: false,
  error: null,
};

// Action types
const FETCH_PROPERTIES_SUCCESS = "FETCH_PROPERTIES_SUCCESS";
const FETCH_PROPERTIES_FAILURE = "FETCH_PROPERTIES_FAILURE";
const LOADING = "LOADING"

// Reducer function for PropertyContext
const propertyReducer = (state: any, action: any) => {
  switch (action.type) {
    case FETCH_PROPERTIES_SUCCESS:
      return {
        ...state,
        properties: action.payload,
        loading: false,
      };
    case FETCH_PROPERTIES_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case LOADING:
        return{
            ...state,
            loading:true,
        }
    default:
      return state;
  }
};

// Create PropertyContext
const PropertyContext = createContext<any>(null);

// Custom hook to use PropertyContext
export const useProperty = () => useContext(PropertyContext);

// PropertyProvider component
export const PropertyProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(propertyReducer, initialState);

  // Access the query from BookingContext
  const { state: bookingState } = useBooking(); // Get the state from BookingContext

  // Fetch properties based on the query from BookingContext
  const fetchProperties = async () => {
    dispatch({ type: "LOADING" });
    console.log(bookingState)
  
    try {
      const response = await axios.get('https://airbnb-clone-server-five.vercel.app/', {
        params: bookingState, // Use the state from BookingContext as query params
      });
      dispatch({ type: FETCH_PROPERTIES_SUCCESS, payload: response.data });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        // Axios error handling
        dispatch({ type: FETCH_PROPERTIES_FAILURE, payload: error.response?.data.message || "Axios error occurred" });
      } else if (error instanceof Error) {
        // Generic error handling
        dispatch({ type: FETCH_PROPERTIES_FAILURE, payload: error.message });
      } else {
        // Handle unknown error types
        dispatch({ type: FETCH_PROPERTIES_FAILURE, payload: "Unknown error occurred" });
      }
    }
  };
  

  // Fetch properties whenever the bookingState changes
  useEffect(() => {
    fetchProperties();
  }, [bookingState]);

  return (
    <PropertyContext.Provider value={{ state, fetchProperties }}>
      {children}
    </PropertyContext.Provider>
  );
};
