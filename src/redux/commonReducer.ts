import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Config from "../config";
import DOMPurify from "dompurify";

export const commonReducer = createSlice({
  name: "common",
  initialState: {
    questions: [],
    answers: [],
    isLoading: true,
    error: undefined,
  },
  reducers: {
    setQuestions: (state: any, action: any) => {
      state.questions = action.payload.map((element: { question: string | Node; }) => {
        element.question = DOMPurify.sanitize(element.question);
        return element;
      });
      state.isLoading = false;
      state.error = undefined;
    },
    setAnswer: (state: any, action: any) => {
      state.answers.push(action.payload);
    },
    error: (state: any, action: any) => {
      state.error = action.payload;
    },
    reset: (state: any) => {
      state.questions = [];
      state.answers = [];
      state.isLoading = true;
      state.error = undefined;
    },
  },
});

export const { setQuestions, setAnswer, error, reset } = commonReducer.actions;

export const fetchQuestions = () => (dispatch: (arg0: { payload: any; type: string; } | { payload: undefined; type: string; }) => void) => {
  axios
    .get(Config.API_URL, { headers: { Accept: "application/json" } })
    .then((response) => {
      const { data } = response;
      const { results } = data;
      dispatch(setQuestions(results));
    })
    .catch((e) => {
      console.error(e);
    });
};

export const selectQuestion = (state: { common: any; }) => {
  const { common } = state;
  const { error, questions, answers } = common;

  if (error) {
    return { error };
  }

  if (questions.length > 0) {
    const currentQuestion = questions[answers.length];
    return {
      ...currentQuestion,
      number: answers.length + 1,
      total: questions.length,
    };
  }

  return {};
};

export const isLoadingState = (state: { common: any; }) => {
  const { common } = state;
  const { error, isLoading } = common;

  if (error) {
    return { error };
  }
    return {
      isLoading,
    };
};

export const selectResults = (state: { common: any; }) => {
  const { common } = state;
  const { questions, answers } = common;

  return questions.map((q: { question: any; correct_answer: any; }, index: string | number) => ({
    question: q.question,
    rightAnswer: answers[index] === q.correct_answer,
  }));
};

export default commonReducer.reducer;