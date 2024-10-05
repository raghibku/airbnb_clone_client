'use client'
// context/BookingContext.tsx
import { createContext, useReducer, useContext, ReactNode } from "react";

// Define the types for state
interface BookingState {
  checkInDate: string;
  checkOutDate: string;
  tagg: string;
  adults: number;
  children: number;
  pets: number;
  country: string;
  type_of_place: string;
  min_price: number;
  max_price: number;
  display_before_taxes : boolean;
}

// Define the types for action
type BookingAction =
  | { type: "SET_CHECKIN_DATE"; payload: string }
  | { type: "SET_CHECKOUT_DATE"; payload: string }
  | { type: "SET_TAG"; payload: string }
  | { type: "SET_COUNTRY"; payload: string }
  | { type: "SET_ADULTS"; payload: number }
  | { type: "SET_CHILDREN"; payload: number }
  | { type: "SET_PETS"; payload: number }
  | { type: "SET_TYPE_OF_PLACE"; payload: string }
  | { type: "SET_MIN_PRICE"; payload: number }
  | { type: "SET_MAX_PRICE"; payload: number }
  | { type: "SET_DISPLAY_BEFORE_TAXES"; payload: boolean };

// Define the initial state
const initialState: BookingState = {
  checkInDate: "",
  checkOutDate: "",
  tagg: "",
  country: "",
  adults: 0,
  children: 0,
  pets: 0,
  type_of_place: "",
  min_price: 0,
  max_price: 10000,
  display_before_taxes:false,
};

// Define the reducer function with proper types
function bookingReducer(state: BookingState, action: BookingAction): BookingState {
  switch (action.type) {
    case "SET_CHECKIN_DATE":
      return { ...state, checkInDate: action.payload };
    case "SET_CHECKOUT_DATE":
      return { ...state, checkOutDate: action.payload };
    case "SET_TAG":
      return { ...state, tagg: action.payload };
    case "SET_COUNTRY":
      return { ...state, country: action.payload };
    case "SET_ADULTS":
      return { ...state, adults: action.payload };
    case "SET_CHILDREN":
      return { ...state, children: action.payload };
    case "SET_PETS":
      return { ...state, pets: action.payload };
    case "SET_TYPE_OF_PLACE":
      return { ...state, type_of_place: action.payload };
    case "SET_MIN_PRICE":
      return { ...state, min_price: action.payload };
    case "SET_MAX_PRICE":
      return { ...state, max_price: action.payload };
    case "SET_DISPLAY_BEFORE_TAXES":
      return { ...state, display_before_taxes: action.payload };
    // default:
    //   throw new Error(`Unknown action: ${action.type}`);
  }
}

// Define the context type
interface BookingContextProps {
  state: BookingState;
  dispatch: React.Dispatch<BookingAction>;
}

// Create context with an initial undefined value
const BookingContext = createContext<BookingContextProps | undefined>(undefined);

// Create a provider component
export const BookingProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(bookingReducer, initialState);

  return (
    <BookingContext.Provider value={{ state, dispatch }}>
      {children}
    </BookingContext.Provider>
  );
};

// Custom hook to use the BookingContext
export const useBooking = () => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error("useBooking must be used within a BookingProvider");
  }
  return context;
};
