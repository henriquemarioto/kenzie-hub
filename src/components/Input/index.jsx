import { Container } from "./style";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

const Input = ({
  placeholder,
  name,
  register,
  registerName,
  type,
  ...rest
}) => {
  const [click, setClick] = useState(false);
  const [inputType, setInputType] = useState(type);

  return (
    <Container>
      <p>{name}</p>
      <div>
        {register ? (
          <input
            placeholder={placeholder}
            type={inputType}
            {...rest}
            {...register(registerName)}
          />
        ) : (
          <input placeholder={placeholder} type={inputType} {...rest} />
        )}

        {type === "password" && (
          <button
            type="button"
            onClick={() => {
              setClick(!click);
              click ? setInputType(type) : setInputType("");
            }}
          >
            {!click ? <FaEyeSlash /> : <FaEye />}
          </button>
        )}
      </div>
    </Container>
  );
};

export default Input;
