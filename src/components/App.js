import React, { useReducer } from "react";
import { Col, Row, Container, Alert } from 'react-bootstrap';
import { NDB_SEARCH_REQUEST, NDB_SEARCH_SUCCESS, NDB_SEARCH_FAILURE } from "../constants/actionTypes";
import { NDB_API_URL } from "../constants/api";
import '../App.css';
import Header from "./Header";
import Footer from "./Footer";
import Search from "./Search";
import FoodTable from "./FoodTable";
import axios from 'axios';

const initialState = {
  isLoading: true,
  foods: [],
  errorMessage: null
};

const reducer = (state = initialState , action) => {
  switch (action.type) {
    case NDB_SEARCH_REQUEST:
      return {
        ...state,
        isLoading: true,
        errorMessage: null
      };
    case NDB_SEARCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        foods: action.payload.list.item
      };
    case NDB_SEARCH_FAILURE:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload.error[0].message
      };
    default:
      return state;
  }
};

const app = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { foods, isLoading, errorMessage } = state;

  const search = searchInput => {
    dispatch({
      type: NDB_SEARCH_REQUEST
    });
  
    axios.get(NDB_API_URL, {
      params: {
        q: searchInput, // "q" is query string param
        sort: "n", // sort by name
        api_key: process.env.REACT_APP_USDA_API_KEY
      }
    })
    .then(result => {
      if(result.data.errors != null) {
        dispatch({
          type: NDB_SEARCH_FAILURE,
          payload: result.data.errors
        });
      }
      else {
        dispatch({
          type: NDB_SEARCH_SUCCESS,
          payload: result.data
        });
      }
    })
  };

  return (
    <div>
      <Header text="USDA Database"/>
      <br/>
      <Container>
        <Row>
          <Col sm="6">
            {errorMessage ? 
              <Alert variant="danger"> 
                {errorMessage}
              </Alert>
              : null
            }
            <Search search={search} className="btn btn-primary"/>
          </Col>
          <Col sm="6">
            <FoodTable foods={foods}/>
          </Col>
        </Row>        
      </Container>
      <Footer/>
    </div>
  );
}

export default app;