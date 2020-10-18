import React from "react";
import cn from "classnames/dedupe";

export default ({ formState }) => {
  return (
    <footer className={cn("footer", { isSubmitting: formState.isSubmitting })}>
      Нажимая "Записаться", я выражаю своё согласие с обработкой моих
      персональных данных в соответствии с принятой{" "}
      <a href="#">политикой конфиденциальности</a> и принимаю{" "}
      <a href="#">пользовательское соглашение</a>
    </footer>
  );
};
