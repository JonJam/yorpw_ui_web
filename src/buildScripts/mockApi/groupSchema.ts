const groupSchema = {
  type: "object",
  properties: {
    groups: {
      type: "array",
      minItems: 0,
      maxItems: 5,
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
            faker: "commerce.productName",
            maxLength: 100
          }
        },
        required: ["id", "name"]
      }
    }
  },
  required: ["groups"]
};

export default groupSchema;
