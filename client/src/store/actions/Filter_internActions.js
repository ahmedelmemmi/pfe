export const filter_intern = (
  internship_title,
  internship_field,
  internship_duration
) => (dispatch) => {
  dispatch({
    type: "GET_INTERN_FILTER",
    internship_title: internship_title,
    internship_field: internship_field,
    internship_duration: internship_duration,
  });
};
