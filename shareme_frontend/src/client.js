import sanityClient, { SanityClient, createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "qwi3hol0",
  dataset: "production",
  apiVersion: "2023-10-23",
  useCdn: true,
  token:
    "skRmlCCL5sHKz4rKm2bVtpV9e4sdHdygaTyXyvX9ZFtVeMQ4nXJfy4rAg9dHsurhtcAY1zDoN217zveFxHdBfj4IXNv2W57HYU6AKKq1xgE8VYYjy6A93MB4bQRPwEcglRkOzPujFyhbUACZuqngLColpgg39Krot6H3sm0gFJwBfYWfrtAf",
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

// const data = await client.fetch(`*[_type == "pin"]`);

// console.log(data);
