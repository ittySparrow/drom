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
  const methods = useForm({
    mode: "all",
    defaultValues: { city: "Владивосток" },
  });

  const { watch, getValues, setValue, reset, trigger } = methods;

  watch(["city", "date"]);

  const updateCity = () => {
    requestDates(getValues("city"), cities);
    if (getValues("date")) {
      setValue("date", null);
      setValue("time", null);
      trigger(["date", "time"]);
      //Я не нашла другого способа сбросить значения этих полей и их валидацию.
      // Метод reset уводит в бесконечный цикл, если использовать его внутри useEffect
    }
  };

  const updateDate = () => {
    if (getValues("date") && getValues("time")) {
      setValue("time", null);
      trigger(["time"]);
    }
  };

  useEffect(updateCity, [getValues("city")]);

  useEffect(updateDate, [getValues("date")]);

  const onSubmit = (data) => {
    addOrder(data);
    alert("Вы успешно зарегистрированы.");
    reset();
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
