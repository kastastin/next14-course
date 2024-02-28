import { createContext } from "react";

const NotificationContext = createContext({
	notification: null,
	showNotification: function () {},
	hideNotification: function () {},
});

export function NotificationContextProvider({ children }) {
	return (
		<NotificationContext.Provider>{children}</NotificationContext.Provider>
	);
}

export default NotificationContext;
