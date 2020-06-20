export const filter_app = (application_status, application_intern) => (
  dispatch
) => {
  dispatch({
    type: "GET_APP_FILTER",
    application_status: application_status,
    application_intern: application_intern,
  });
};
