import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useForm, FormProvider } from "react-hook-form";
import { requestDates } from "../_reducers/registerPage";
import { addOrder } from "../_reducers/ordersPage";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import RegisterForm from "./RegisterForm/RegisterForm";
import "./RegisterPage.css";

const RegisterPageContainer = ({ requestDates, addOrder, cities, dates }) => {
  const defaultValues = {
    city: "Владивосток",
    date: "",
    time: "",
    tel: "",
    name: "",
  };

  const methods = useForm({
    mode: "all",
    defaultValues: defaultValues,
  });

  const { watch, getValues, reset, formState } = methods;

  watch(["city", "date"]);

  const handleCityChange = () => {
    requestDates(getValues("city"), cities);
  };

  const handleSubmittion = () => {
    if (formState.isSubmitSuccessful) {
      alert("Вы успешно зарегистрированы.");
      reset(defaultValues);
    }
  };

  useEffect(handleCityChange, [getValues("city")]);
  useEffect(handleSubmittion, [formState.isSubmitSuccessful]);

  const onSubmit = (data) => {
    addOrder(data);
  };

  return (
    <div className="register-page-wrapper">
      <FormProvider {...methods}>
        <Header />
        <RegisterForm onSubmit={onSubmit} cities={cities} dates={dates} />
        <Footer />
      </FormProvider>
    </div>
  );
};

const mapStateToProps = ({ registerForm }) => {
  return {
    cities: registerForm.cities,
    dates: registerForm.dates,
  };
};

const mapDispatchToProps = {
  requestDates,
  addOrder,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterPageContainer);
