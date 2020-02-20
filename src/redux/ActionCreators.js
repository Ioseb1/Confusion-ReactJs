import * as ActionTypes from "./ActionTypes";
import { DISHES } from "../shared/dishes";
import { baseUrl } from "../shared/baseUrl";

export const addComment = comment => ({
  type: ActionTypes.ADD_COMMENT,
  payload: comment
});

// Fetch dish
export const fetchDishes = () => dispatch => {
  dispatch(dishesLoading(true));

  return fetch(baseUrl + "dishes")
    .then(
      response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      error => {
        var errorMessage = new Error(error.message);
        throw errorMessage;
      }
    )
    .then(response => response.json())
    .then(dishes => dispatch(addDishes(dishes)))
    .catch(error => dispatch(dishesFailed(error.message)));
};

export const dishesLoading = () => ({
  type: ActionTypes.DISHES_LOADING
});

export const dishesFailed = errorMessage => ({
  type: ActionTypes.DISHES_FAILED,
  payload: errorMessage
});

export const addDishes = dishes => ({
  type: ActionTypes.ADD_DISHES,
  payload: dishes
});

// Fetch Comments
export const fetchComments = () => dispatch => {
  return fetch(baseUrl + "comments")
    .then(
      response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      error => {
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then(response => response.json())
    .then(comments => dispatch(addComments(comments)))
    .catch(error => dispatch(commentsFailed(error.message)));
};

export const commentsFailed = errorMessage => ({
  type: ActionTypes.COMMENTS_FAILED,
  payload: errorMessage
});

export const addComments = comments => ({
  type: ActionTypes.ADD_COMMENTS,
  payload: comments
});

// Fetch Promotions
export const fetchPromos = () => dispatch => {
  dispatch(promosLoading());

  return fetch(baseUrl + "promotions")
    .then(
      response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      error => {
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then(response => response.json())
    .then(promos => dispatch(addPromos(promos)))
    .catch(error => dispatch(promosFailed(error.message)));
};

export const promosLoading = () => ({
  type: ActionTypes.PROMOS_LOADING
});

export const promosFailed = errmess => ({
  type: ActionTypes.PROMOS_FAILED,
  payload: errmess
});

export const addPromos = promos => ({
  type: ActionTypes.ADD_PROMOS,
  payload: promos
});

// Fetch Leaders
export const fetchLeaders = () => dispatch => {
  dispatch(leadersLoading());

  return fetch(baseUrl + "leaders")
    .then(
      response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      error => {
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then(response => response.json())
    .then(leaders => dispatch(addLeaders(leaders)))
    .catch(errmess => dispatch(leadersFailed(errmess)));
};

export const leadersLoading = () => ({
  type: ActionTypes.LEADERS_LOADING
});

export const addLeaders = leaders => ({
  type: ActionTypes.ADD_LEADERS,
  payload: leaders
});

export const leadersFailed = errorMessage => ({
  type: ActionTypes.LEADERS_FAILED,
  payload: errorMessage
});

// Posting the comment with Error Handling
export const postComment = (dishId, rating, author, comment) => dispatch => {
  const newComment = {
    dishId: dishId,
    rating: rating,
    author: author,
    comment: comment
  };
  newComment.date = new Date().toISOString();

  return fetch(baseUrl + "comments", {
    method: "POST",
    body: JSON.stringify(newComment),
    headers: {
      "Content-Type": "application/json"
    },
    credentials: "same-origin"
  })
    .then(
      response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      error => {
        var errorMessage = new Error(error.message);
        throw errorMessage;
      }
    )
    .then(response => response.json())
    .then(response => dispatch(addComment(response)))
    .catch(error => {
      console.log("Post comments", error.message);
      alert("Your comment could not be posted\nError: " + error.message);
    });
};

// Posting feedback
export const postFeedback = (
  firstname,
  lastname,
  telnum,
  email,
  agree,
  contactType,
  message
) => dispatch => {
  const newFeedback = {
    firstname: firstname,
    lastname: lastname,
    telnum: telnum,
    email: email,
    agree: agree,
    contactType: contactType,
    message: message
  };

  return fetch(baseUrl + "feedback", {
    method: "POST",
    body: JSON.stringify(newFeedback),
    headers: {
      "Content-Type": "application/json"
    },
    credentials: "same-origin"
  })
    .then(
      response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      error => {
        throw error;
      }
    )
    .then(response => response.json())
    .then(response =>
      alert("Thank you for your feedback!" + JSON.stringify(response))
    )
    .catch(error => {
      console.log("post feedbacks", error.message);
      alert("Your feedback could not be posted\nError: " + error.message);
    });
};
