export default {
  // TODO: Check to see if the jwt is valid actually,not just that we have one.
  isAuthenticated: !!sessionStorage.jwt,
};
