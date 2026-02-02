import reactLogo from "../assets/react.svg";

export const PromotedSection = () => {
  const categ: string[] = (() => {
    let ar = [];
    for (let i = 0; i < 10; i++) {
      ar.push("Maria Ioana " + i);
    }
    return ar;
  })();

  return (
    <div className="promotedSection">
      <h3>Anunturi promovate</h3>
      <div>
        {categ.map((title) => (
          <Item title={title} />
        ))}
      </div>
    </div>
  );
};

type ItemProps = {
  title: string;
  city?: string;
  date?: string;
  imgId?: number;
};

const Item = (props: ItemProps) => {
  return (
    <div className="item">
      <img src={reactLogo} />
      <div className="info">
        <div className="title">Titlu</div>
        <div className="location">Locatie - Data</div>
        <div className="price">Pret lei</div>
      </div>
    </div>
  );
};
