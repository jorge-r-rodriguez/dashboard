import buildUrl from 'build-url';

const getCasBaseUrl = (): string => {
	const baseCasUrl = import.meta.env.VITE_APP_CAS_ENDPOINT;
	if (!baseCasUrl) throw new Error("VITE_APP_CAS_ENDPOINT no está definido");
	return baseCasUrl;
};

export const casLogin = async (): Promise<any> => {
	const serviceUrl = window.location.origin + window.location.pathname;
	const ticket = new URLSearchParams(window.location.search).get("ticket");

	if (!ticket) {
		const loginUrl = `https://${getCasBaseUrl()}/cas/login?service=${encodeURIComponent(serviceUrl)}`;
		window.location.href = loginUrl;
		return Promise.reject("Redirigiendo a CAS...");
	}

	const validateUrl = `https://${getCasBaseUrl()}/cas/p3/serviceValidate?ticket=${encodeURIComponent(
		ticket
	)}&service=${encodeURIComponent(serviceUrl)}&format=JSON`;

	console.log("🔗 Validando CAS:");
	console.log("ticket:", ticket);
	console.log("service:", serviceUrl);
	console.log("validateUrl:", validateUrl);

	const res = await fetch(validateUrl);
	const contentType = res.headers.get("content-type");

	if (!contentType?.includes("application/json")) {
		const text = await res.text();
		console.error("❌ CAS no devolvió JSON. Respuesta cruda:\n", text);
		throw new Error("CAS no devolvió datos en formato JSON.");
	}

	const data = await res.json();
	const success = data?.serviceResponse?.authenticationSuccess;

	if (!success || !success.user) {
		throw new Error("No se autenticó ningún usuario");
	}

	// Limpia el ticket de la URL para evitar reusos
	window.history.replaceState(null, "", window.location.pathname);

	return {
		user: success.user,
		attributes: success.attributes || {},
	};

	return {
		user: success.user,
		attributes: success.attributes || {},
	};
};

export const casLogout = (): void => {
	const logoutUrl = `https://${getCasBaseUrl()}/cas/logout`;
	window.location.href = logoutUrl;
};



