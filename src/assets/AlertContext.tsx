import React, { createContext, useState, useContext } from "react";
import { MdOutlineDangerous as NotAddedToCart } from "react-icons/md";

// Define the types of alerts (success, error, info, etc.)
type AlertType = "success" | "error" | "info" | "warning";

interface AlertContextProps {
  setAlert: (message: string, type: AlertType) => void;
  clearAlert: () => void;
}

const AlertContext = createContext<AlertContextProps | undefined>(undefined);

export const AlertProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [alert, setAlertState] = useState<{
    message: string;
    type: AlertType;
    showAlert: boolean;
    icon?: React.ReactNode;
    color?: string;
  }>({
    message: "",
    type: "info",
    showAlert: false,
    icon: undefined,
    color: "",
  });

  const setAlert = (message: string, type: AlertType) => {
    let icon: React.ReactNode;
    let color: string;
    console.log("Setting alert:", message, type);
    // Set the icon and color based on the alert type
    switch (type) {
      case "success":
        icon = <NotAddedToCart style={{ color: 'green'}} />;
        color = "green";
        break;
      case "error":
        icon = "❌";
        color = "red";
        break;
      case "info":
        icon = "ℹ️";
        color = "black";
        break;
      case "warning":
        icon = "⚠️";
        color = "orange";
        break;
      default:
        icon = "";
        color = "";
        break;
    }

    setAlertState({
      message,
      type,
      showAlert: true,
      icon,
      color,
    });

    // Clear the alert after 3 seconds
    setTimeout(() => {
      clearAlert();
    }, 3000);
  };

  const clearAlert = () => {
    setAlertState({
      message: "",
      type: "info",
      showAlert: false,
      icon: undefined,
      color: "",
    });
  };

  return (
    <AlertContext.Provider value={{ setAlert, clearAlert }}>
      {children}
      {/* Dedicated alert rendering component */}
      {alert.showAlert && <Alert alert={alert} />}
    </AlertContext.Provider>
  );
};

const Alert: React.FC<{ alert: any }> = ({ alert }) => {
    {console.log("Show alert:", alert.showAlert)}
  return (
    <div className="messageAlert" style={{ color: alert.color,  zIndex: 1000 }}>
      <span style={{marginRight: "5px"}}>{alert.icon}</span>
      <span>{alert.message}</span>
    </div>
  );
};

export const useAlert = () => {
  const context = useContext(AlertContext);
  if (!context) {
    throw new Error("useAlert must be used within an AlertProvider");
  }
  return context;
};
