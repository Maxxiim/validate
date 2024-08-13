var data = {
  name: "",
  age: 30,
  city: null,
};

var rules = {
  name: { required: true, minLength: 1, maxLength: 4 },
  age: { min: 18, max: 50 },
};

function validate(data, rules) {
  const errors = [];
  let result = true;

  for (const field in rules) {
    const value = data[field];
    const rule = rules[field];

    if (rule.required) {
      if (value === undefined || value === null) {
        errors.push({ field: field, rule: "required", value: value });
        result = false;
        console.log(errors)
      }
    }

    if (field === "age") {

      if (typeof value !== "number" || isNaN(value)) {
        errors.push({ field: field, rule: "isNumber", value: value });
        result = false;
        console.log(errors)
      }

      if (rule.min !== undefined && value < rule.min) {
        errors.push({ field: field, rule: "min", value: value })
        result = false;
        console.log(errors)
      }

      if (rule.max !== undefined && value > rule.max) {
        errors.push({ field: field, rule: "max", value: value })
        result = false;
        console.log(errors)
      }
      else {
        return { errors, result }
      }
    }

    if (rule.isBoolean) {
      if (typeof value !== "boolean") {
        errors.push({ field: field, rule: "isBoolean", value: value });
        result = false;
      }
    }

    if (value === undefined && value !== null) {
      if (rule.isString && typeof value !== "string") {
        console.log(rule.isString && typeof value !== "string")
        errors.push({ field: field, rule: "isString", value: value });
        result = false;
        console.log(errors)
      }
    }

    if (field === 'name') {
      // Проверка на тип строки
      if (typeof value !== 'string') {
          errors.push({ field: field, rule: 'isString', value: value });
          result = false;
          console.log(errors)
      } 
  }


  };
  return { errors, result };
};

validate(data, rules)
