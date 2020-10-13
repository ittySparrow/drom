import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useForm } from "react-hook-form";
import { requestDates } from "../_reducers/registerPage";
import { addOrder } from "../_reducers/ordersPage";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import RegisterFormClear from "./RegisterForm/RegisterForm";
import "./RegisterPage.css";

const RegisterPageContainer = ({ requestDates, addOrder, cities, dates }) => {
  const {
    register,
    handleSubmit,
    errors,
    formState,
    getValues,
    setValue,
    watch,
    reset,
    clearErrors,
    control,
  } = useForm({
    mode: "all",
    defaultValues: { city: "Владивосток" },
  });

  const { isValid, isSubmitting, isSubmitSuccessful } = formState;

  watch(["city", "time", "date"]);

  useEffect(() => {
    const city = getValues("city");
    requestDates(city, cities);
    setValue("date", null);
    setValue("time", null);
    clearErrors();
  }, [cities, getValues("city")]);

  useEffect(() => {
    setValue("time", null);
  }, [getValues("date")]);

  const onSubmit = async (data) => {
    await setTimeout(() => addOrder(data), 5000);
    alert("Вы успешно зарегистрированы.");
    reset();
  };

  return (
    <div className="register-page-wrapper">
      <Header />
      <RegisterFormClear
        control={control}
        register={register}
        onSubmit={onSubmit}
        handleSubmit={handleSubmit}
        getValues={getValues}
        cities={cities}
        dates={dates}
        errors={errors}
        isValid={isValid}
        isSubmitting={isSubmitting}
        clearErrors={clearErrors}
        setValue={setValue}
      />
      <Footer />
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
