import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useForm, FormProvider } from "react-hook-form";
import { requestDates } from "../_reducers/registerPage";
import { addOrder } from "../_reducers/ordersPage";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import RegisterForm from "./RegisterForm/RegisterForm";

const RegisterPageContainer = ({ requestDates, addOrder, cities, dates }) => {
  const methods = useForm({
    mode: "all",
    defaultValues: { city: "Владивосток" },
  });

  const { formState, watch, getValues, setValue, clearErrors, reset } = methods;

  const { isSubmitting, isSubmitSuccessful } = formState;

  watch(["city", "time", "date"]);

  useEffect(() => {
    const city = getValues("city");
    requestDates(city, cities);
    setValue("date", null);
    setValue("time", null);
    clearErrors();
  }, [cities, getValues("city")]);

  useEffect(() => {
    const values = getValues();
    if (getValues("date")) {
      setValue("time", null);
    }
  }, [getValues("date")]);

  useEffect(() => {
    if (isSubmitSuccessful) {
      alert("Вы успешно зарегистрированы.");
      reset();
    }
  }, [isSubmitSuccessful]);

  const onSubmit = (data) => {
    addOrder(data);
  };

  return (
    <div className="register-page-wrapper">
      <Header isSubmitting={isSubmitting} />
      <FormProvider {...methods}>
        <RegisterForm
          isSubmitting={isSubmitting}
          onSubmit={onSubmit}
          cities={cities}
          dates={dates}
        />
      </FormProvider>
      <Footer isSubmitting={isSubmitting} />
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
