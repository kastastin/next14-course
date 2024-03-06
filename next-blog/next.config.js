const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
	if (phase === PHASE_DEVELOPMENT_SERVER) {
		return {
			env: {
				MONGODB_URI:
					"mongodb+srv://kastastin:prostopass@cluster0.mrme6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
			},
		};
	}

	return {
		env: {
			MONGODB_URI:
				"mongodb+srv://kastastin:prostopass@cluster0.mrme6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
		},
	};
};
