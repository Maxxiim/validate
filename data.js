var data = {
  name: "Maxim",
  age: 30,
  city: null,
};

var rules = {
  name: { required: true, minLength: 2, maxLength: 4 },
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

    // Проверка на строку
    if (value !== undefined && value !== null) {
      if (rule.isString && typeof value !== "string") {
        errors.push({ field: field, rule: "isString", value: value });
        result = false;
      }

      if (typeof value === "string") {
        let hasError = false;

        if (rule.minLength !== undefined && value.length < rule.minLength) {
          errors.push({ field: field, rule: "minLength", value: value });
          hasError = true;
        }

        if (rule.maxLength !== undefined && value.length > rule.maxLength) {
          errors.push({ field: field, rule: "maxLength", value: value });
          hasError = true;
        }

        if (hasError) {
          result = false;
        }
      } else if (rule.minLength !== undefined || rule.maxLength !== undefined) {
        errors.push({ field: field, rule: "minLength", value: value });
        errors.push({ field: field, rule: "maxLength", value: value });
        result = false;
      }
    }

    // Проверка на число
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

    // Проверка на email
    if (rule.isEmail) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (typeof value === "string") {
        if (!emailPattern.test(value)) {
          errors.push({ field: field, rule: "isEmail", value: value });
          result = false;
        }
      } else {
        return { errors, result }
      }
    }

  };
  return { errors, result };
};

validate(data, rules)
