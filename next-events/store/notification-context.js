import { createContext, useState, useEffect } from "react";

const NotificationContext = createContext({
	notification: null,
	showNotification: function (notificationData) {},
	hideNotification: function () {},
});

export function NotificationContextProvider({ children }) {
	const [activeNotification, setActiveNotification] = useState(null);

	useEffect(() => {
		if (
			activeNotification &&
			(activeNotification.status === "success" ||
				activeNotification.status === "error")
		) {
			const timer = setTimeout(() => {
				setActiveNotification(null);
			}, 3000);

			return () => {
				clearTimeout(timer);
			};
		}
	}, [activeNotification]);

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
