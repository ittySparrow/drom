import React from "react";
import cn from "classnames/dedupe";
import { useFormContext } from "react-hook-form";

export default () => {
  const { formState } = useFormContext();

  return (
    <footer className={cn("footer", { isSubmitting: formState.isSubmitting })}>
      Нажимая "Записаться", я выражаю своё согласие с обработкой моих
      персональных данных в соответствии с принятой{" "}
      <a href="#">политикой конфиденциальности</a> и принимаю{" "}
      <a href="#">пользовательское соглашение</a>
    </footer>
  );
};
