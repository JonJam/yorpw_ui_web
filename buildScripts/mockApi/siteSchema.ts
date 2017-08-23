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
          "id" : {
            "type": "string",
            "faker": "random.uuid"
          },
          "name": {
            "type": "string",
            "faker": "internet.domainName"
          },
          "url": {
            "type": "string",
            "faker": "internet.url"
          },
          "userName": {
            "type": "string",
            "faker": "internet.userName"
          },
          "password": {
            "type": "string",
            "faker": "internet.password"
          }
        },
        required: ["id", "name", "url", "userName", "password"]
      }
    }
  },
  required: ["sites"]
};

export default siteSchema;