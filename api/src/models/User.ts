export default interface User {
  first_name: String;
  last_name: String;
  email: String;
  password: String;
  active: Boolean;
  created_at: Date;
  last_login: Date;
}
