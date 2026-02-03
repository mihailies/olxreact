// import { useEffect, type ReactNode } from "react";
import reactLogo from "../assets/react.svg";

export const CategoriesSection = () => {
  const categ: string[] = (() => {
    let ar = [];
    for (let i = 0; i < 10; i++) {
      ar.push("Maria Ioana " + i);
    }
    return ar;
  })();

  // useEffect(() => {}, []);

  return (
    <div className="categoriesSection">
      <h3>Categorii principale</h3>
      <div>
        {categ.map((title) => (
          <Categ title={title} />
        ))}
      </div>
    </div>
  );
};

type CategProps = {
  title: string;
  imgId?: number;
};

const Categ = (props: CategProps) => {
  return (
    <a>
      <img src={reactLogo} />
      <p>{props.title}</p>
    </a>
  );
};
