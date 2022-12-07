import * as contentful from "contentful";

const space = "lif4ahqjiyq7";
const token = "TzAyIXh7nD8bdWiO4xLGEEYcfi_E86_cvrMjuVb9hPk";

const contentfulUrlData = {
    space: import.meta.env.VITE_MY_SPACE,
    accessToken: import.meta.env.VITE_ACCESS_TOKEN,
};

export const client = contentful.createClient(contentfulUrlData);
