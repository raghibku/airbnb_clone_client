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
}

// Define the types for action
type BookingAction =
  | { type: "SET_CHECKIN_DATE"; payload: string }
  | { type: "SET_CHECKOUT_DATE"; payload: string }
  | { type: "SET_TAG"; payload: string }
  | { type: "SET_COUNTRY"; payload: string }
  | { type: "SET_ADULTS"; payload: number }
  | { type: "SET_CHILDREN"; payload: number }
  | { type: "SET_PETS"; payload: number };

// Define the initial state
const initialState: BookingState = {
  checkInDate: "",
  checkOutDate: "",
  tagg: "",
  country: "",
  adults: 0,
  children: 0,
  pets: 0,
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
