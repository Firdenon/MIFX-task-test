import axios from "axios";
import { Category } from "../shared/model/categoryModel";
import { Product } from "../shared/model/productModel";

const url = "https://fe.dev.dxtr.asia/api";
const token =
  "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiZmYyMjY2ZjkxOTdmNTQyZmJiODBkZGVkYjcyM2YzMzFiY2JlYjQzZTE2ZWM4NTI1MTNjYWIzZDczNTVkMjMyMGJlNGZiNmYzYjUxMGIzNjYiLCJpYXQiOjE2Njc5MTQ0MDIsIm5iZiI6MTY2NzkxNDQwMiwiZXhwIjoxNjk5NDUwNDAyLCJzdWIiOiI0Iiwic2NvcGVzIjpbXX0.ipDP3Hol_sf--IZ56oHmjr1FFJ2vPzpJOlu6rhmM0cyVdk7lzmUOOMWi_UVeYAE4ToAPwDKtMsNDt8xYgaqqgn1Ti-Ub3rZu2CKEj0ldl1xdofajZhOICZVRX6-mFuFVq9uTQc_vlMlaYaGAPUcoR7kMWySuwgJCIwFHbeq6Tu2KiBB1uxfjdzJcR73ZkOeETOOoLgI48huYuSDyFw_xYZbAE8kPZJHpJOxW7p7okWYrjfuSaxqw2hlitrK6msWy_gL4z-n9-ExM0rS9RNEBwd-E9oYlKO3sDnl3SVLpMy-z82ZlE9rzHt5trG_S-iZotRZnwtECSj4wVpoDdGkmeyC07izQkr-WDKyOXh3iAMENWQ993DiQyj0oYh1aPOJJZJoseftiaD2jKbS7Wq4IjarGiVI7qovGPEDBv8Z1mtdbqW4RhjM-u5VbgslAv2ulkSY7w5YhrRt10U_5tJQlTrawmwHkH5k5uWmKKg00KxKfACR5nkexzMwZMc3oDmMrr0IVjLdllQ4uCMJ_NL3Jes7qMhG8l9TbWOE26SAZ8337T4n_fvZUpPl9G170KaWfO4cJ61B2MfGZwGIV6zikwI2o_t7J2LhbMBdkSxH8PWDqV-Xhgb8F2nEii-jEKBdtPumfXDm_jzIYhYGLwDtqsH3HsL_DcpTJpitMOUDzMnY";

const http = axios.create({
  baseURL: url,
  headers: { Authorization: token },
});

export const fetchCategory = () => {
  return http.get<Category[]>("/category");
};

export const fetchProducts = () => {
  return http.get<Product[]>("/products");
};
