import { createContext, useState } from "react";

const NotificationContext = createContext({
	notification: null,
	showNotification: function (notificationData) {},
	hideNotification: function () {},
});

export function NotificationContextProvider({ children }) {
	const [activeNotification, setActiveNotification] = useState(null);

	const context = {
		notification: activeNotification,
		showNotification: showNotificationHandler,
		hideNotification: hideNotificationHandler,
	};

	function showNotificationHandler(notificationData) {
		setActiveNotification(notificationData);
	}

	function hideNotificationHandler() {
		setActiveNotification(null);
	}

	return (
		<NotificationContext.Provider value={context}>
			{children}
		</NotificationContext.Provider>
	);
}

export default NotificationContext;
