import { useEffect, useState, type ReactNode } from "react";
import reactLogo from "../assets/react.svg";

export const CategoriesSection = () => {
  const [categories, setCategories] = useState<{title:string}[]>([]);

  useEffect(() => {
    fetch("/categories").then((res) => {
      // console.log(res);
      return res.json()
    }).then(data=>{
      // console.log(data.categories)
      setCategories(data.categories)
    });
  }, []);

  return (
    <div className="categoriesSection">
      <h3>Categorii principale</h3>
      <div>
        {categories.length && categories.map((categ) => (
          <Categ title={categ.title || "#!!!NO CATEGORY NAME"} />
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
