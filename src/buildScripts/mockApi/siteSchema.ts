const siteSchema = {
  type: "object",
  properties: {
    sites: {
      type: "array",
      minItems: 0,
      maxItems: 20,
      uniqueItems: true,
      items: {
        type: "object",
        properties: {
          id: {
            type: "string",
            faker: "random.uuid"
          },
          name: {
            type: "string",
            faker: "internet.domainName",
            maxLength: 100
          },
          url: {
            type: "string",
            faker: "internet.url",
            maxLength: 1000
          },
          userName: {
            type: "string",
            faker: "internet.email",
            maxLength: 100
          },
          password: {
            type: "string",
            faker: "internet.password",
            maxLength: 100
          }
        },
        required: ["id", "name", "url", "userName", "password"]
      }
    }
  },
  required: ["sites"]
};

export default siteSchema;
