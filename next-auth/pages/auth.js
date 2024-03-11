import { useEffect } from "react";
import { getSession } from "next-auth/client";
import { useRouter } from "next/router";

import AuthForm from "../components/auth/auth-form";

export default function AuthPage() {
	const router = useRouter();
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		getSession().then((session) => {
			if (session) {
				router.replace("/profile");
			} else {
				setIsLoading(false);
			}
		});
	}, [router]);

	if (isLoading) return <p>Loading...</p>;

	return <AuthForm />;
}
